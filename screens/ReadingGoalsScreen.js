import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { db, auth } from "../firebase_configure";
import { doc, updateDoc } from "firebase/firestore";

export default function ReadingGoalsScreen() {
  const [selectedTime, setSelectedTime] = useState(null);
  const navigation = useNavigation();

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedTime === null) {
      // User has not selected a time
      alert("Please select a reading time");
      return;
    }

    (async () => {
      try {
        // Check the authentication state
        const user = auth.currentUser;
        if (!user) {
          // User is not logged in, handle this scenario
          console.log("User is not logged in");
          return;
        }

        // Save the selected time to Firestore
        const userId = user.uid;
        const userRef = doc(db, "users", userId);

        await updateDoc(userRef, {
          readingTime: selectedTime,
        });

        // Alternatively, you can perform any other desired action here

        // Navigate to the next screen
        navigation.navigate("Profile");
      } catch (error) {
        console.log("Error saving the selected time:", error);
        // Handle the error appropriately (e.g., show an error message)
      }
    })();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F4F8FF",
      }}
    >
      <StatusBar backgroundColor="#000" />
      <View
        style={{
          marginLeft: 16,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#290f36",
            marginLeft: 10,
          }}
        >
          Goals
        </Text>
      </View>

      <View style={{ marginTop: 20, marginLeft: 16 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#290f36",
            marginBottom: 30,
          }}
        >
          Select Your Reading Goal:
        </Text>
        <TouchableOpacity
          onPress={() => handleTimeSelection("15 mins")}
          style={{
            borderWidth: 3,
            borderRadius: 8,
            borderColor: selectedTime === "15 mins" ? "#EF8354" : "#577689",
            backgroundColor: selectedTime === "15 mins" ? "#EF8354" : "#577689",
            padding: 16,
            marginBottom: 10,
            width: "70%",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
            15 minutes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTimeSelection("30 mins")}
          style={{
            borderWidth: 3,
            borderRadius: 8,
            borderColor: selectedTime === "30 mins" ? "#EF8354" : "#577689",
            backgroundColor: selectedTime === "30 mins" ? "#EF8354" : "#577689",
            padding: 16,
            marginBottom: 10,
            width: "70%",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
            30 minutes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTimeSelection("45 mins")}
          style={{
            borderWidth: 3,
            borderRadius: 8,
            borderColor: selectedTime === "45 mins" ? "#EF8354" : "#577689",
            backgroundColor: selectedTime === "45 mins" ? "#EF8354" : "#577689",
            padding: 16,
            marginBottom: 10,
            width: "70%",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
            45 minutes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTimeSelection("1 hour")}
          style={{
            borderWidth: 3,
            borderRadius: 8,
            borderColor: selectedTime === "1 hour" ? "#EF8354" : "#577689",
            backgroundColor: selectedTime === "1 hour" ? "#EF8354" : "#577689",
            padding: 16,
            marginBottom: 10,
            width: "70%",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
            1 hour
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTimeSelection("any spare time")}
          style={{
            borderWidth: 3,
            borderRadius: 8,
            borderColor:
              selectedTime === "any spare time" ? "#EF8354" : "#577689",
            backgroundColor:
              selectedTime === "any spare time" ? "#EF8354" : "#577689",
            padding: 16,
            marginBottom: 10,
            width: "70%",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
            Any spare time
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleContinue}
          disabled={!selectedTime}
          style={{
            backgroundColor: selectedTime ? "#1D002D" : "#b3cefa",
            width: "60%",
            height: 60,
            justifyContent: "center",
            marginTop: 20,
            alignSelf: "center",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
