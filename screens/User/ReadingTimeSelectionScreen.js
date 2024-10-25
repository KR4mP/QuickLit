import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { db, auth } from "../../firebase_configure";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const ReadingTimeSelectionScreen = ({ navigation }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedTime === "") {
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
        navigation.navigate("NameInputScreen");
      } catch (error) {
        console.log("Error saving the selected time:", error);
        // Handle the error appropriately (e.g., show an error message)
      }
    })();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        className="text-center text-3xl pb-10"
        style={{ fontWeight: "bold", marginBottom: 20 }}
      >
        How much time do you want to read each day?
      </Text>
      <TouchableOpacity
        onPress={() => handleTimeSelection("15 mins")}
        className="p-3 w-[50%] bg-gray-200 mb-3"
        style={{
          borderWidth: 3,
          borderRadius: 5,
          borderColor: selectedTime === "15 mins" ? "#1D002D" : "#b3cefa",
        }}
      >
        <Text className="text-2xl text-center">15 mins</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTimeSelection("30 mins")}
        className="p-3 w-[50%] bg-gray-200 mb-3"
        style={{
          borderWidth: 3,
          borderRadius: 5,
          borderColor: selectedTime === "30 mins" ? "#1D002D" : "#b3cefa",
        }}
      >
        <Text className="text-2xl text-center">30 mins</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTimeSelection("45 mins")}
        className="p-3 w-[50%] bg-gray-200 mb-3"
        style={{
          borderWidth: 3,
          borderRadius: 5,
          borderColor: selectedTime === "45 mins" ? "#1D002D" : "#b3cefa",
        }}
      >
        <Text className="text-2xl text-center">45 mins</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTimeSelection("1 hour")}
        className="p-3 w-[50%] bg-gray-200 mb-3"
        style={{
          borderWidth: 3,
          borderRadius: 5,
          borderColor: selectedTime === "1 hour" ? "#1D002D" : "#b3cefa",
        }}
      >
        <Text className="text-2xl text-center">1 hour</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTimeSelection("any spare time")}
        className="p-3 w-[50%] bg-gray-200 mb-3"
        style={{
          borderWidth: 3,
          borderRadius: 5,
          borderColor:
            selectedTime === "any spare time" ? "#1D002D" : "#b3cefa",
        }}
      >
        <Text className="text-2xl text-center">Any spare time</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleContinue}
        className="bg-[#1D002D] w-[60%] h-[60px] justify-center mt-8"
        style={{
          padding: 12,
          borderRadius: 5,
        }}
      >
        <Text
          className="text-center text-2xl"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReadingTimeSelectionScreen;
