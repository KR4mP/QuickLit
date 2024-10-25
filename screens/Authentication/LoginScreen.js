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
import { signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import { auth } from "../../firebase_configure";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log("Login successful:", user.email);
        navigation.navigate("Main");
      })
      .catch((error) => {
        // Handle login error
        setError(error.message);
        console.error("Login error:", error);
      });
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#F4F8FF] px-5">
      <Text className="text-5xl mb-6">Welcome Back</Text>
      {error !== "" && (
        <Text className="text-red-500 mb-6">
          {error === "auth/invalid-email"
            ? "Invalid email. Please enter a valid email address."
            : error === "auth/user-not-found"
            ? "User not found. Please check your email or sign up."
            : error === "auth/wrong-password"
            ? "Incorrect password. Please enter the correct password."
            : "Login failed. Please try again."}
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
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-[#5d82a7] py-3 mt-4 px-20 rounded-xl"
      >
        <Text className="text-3xl text-white">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-5"
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text className="text-xl">Go Back</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="#000" />
    </SafeAreaView>
  );
};

export default LoginScreen;
