import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { db, auth } from "../../firebase_configure";
import { doc, updateDoc } from "firebase/firestore";

const NameInputScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const handleContinue = async () => {
    if (name.trim() === "" || nickname.trim() === "") {
      // User has not entered both name and nickname
      alert("Please enter your name and nickname");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        // User is not logged in, handle this scenario
        console.log("User is not logged in");
        return;
      }

      // Get the Firestore document reference
      const userId = user.uid;
      const userRef = doc(db, "users", userId);

      // Wrap the updateDoc call in an IIFE to use await
      (async () => {
        await updateDoc(userRef, {
          name,
          nickname,
        });
      })();

      // Alternatively, you can perform any other desired action here

      // Navigate to the next screen
      navigation.navigate("Main");
    } catch (error) {
      console.log("Error saving name and nickname:", error);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
      />

      <Text style={styles.label}>Enter your nickname:</Text>
      <TextInput
        style={styles.input}
        value={nickname}
        onChangeText={(text) => setNickname(text)}
        placeholder="Nickname"
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F8FF",
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default NameInputScreen;
