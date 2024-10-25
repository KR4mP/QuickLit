import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import firebase from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_configure";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError(
        "Passwords do not match. Please make sure both passwords are the same."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signup successful
        const user = userCredential.user;
        console.log("Signup successful:", user.email);
        navigation.navigate("CategoryPreferences");
      })
      .catch((error) => {
        // Handle signup error
        setError(error.message);
        console.error("Signup error:", error);
      });
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#F4F8FF] px-5">
      <StatusBar backgroundColor="#000" />
      <Text className="text-5xl mb-6">Signup</Text>
      {error !== "" && (
        <Text className="text-red-500 mb-6">
          {error === "auth/weak-password"
            ? "Password is too weak. Please choose a stronger password."
            : error === "auth/email-already-in-use"
            ? "Email is already in use. Please use a different email."
            : error === "auth/invalid-email"
            ? "Invalid email address. Please enter a valid email."
            : `An unexpected error occurred. Please try again.`}
        </Text>
      )}
      <View className="w-full space-y-3 my-5 mt-16 mb-10">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="bg-white text-xl py-4 pl-3 border rounded-xl"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="bg-white text-xl py-4 pl-3 border rounded-xl"
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          className="bg-white text-xl py-4 pl-3 border rounded-xl"
        />
      </View>
      <TouchableOpacity
        onPress={handleSignup}
        className="bg-[#1D002D] py-3 mt-4 px-20 rounded-xl"
      >
        <Text className="text-2xl text-white">Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-5"
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text className="text-xl">Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignupScreen;
