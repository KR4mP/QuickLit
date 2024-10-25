import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 pt-52 items-center bg-[#F4F8FF]">
      <StatusBar backgroundColor="#000" />
      <View className="items-center">
        <Text className="text-5xl mb-6">Welcome to</Text>
        <Text className="text-6xl mt-3 font-bold text-blue-600">QuickLit</Text>
      </View>

      <View className="h-full items-center space-y-3 justify-center">
        <TouchableOpacity
          className="w-[300px] py-3 rounded-md bg-[#1D002D]"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text className="text-2xl text-white text-center">Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-[300px] py-3 rounded-md bg-[#5d82a7]"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-2xl text-center text-white">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
