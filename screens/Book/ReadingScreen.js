import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ReadingScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-[#F4F8FF] relative"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="flex-row items-center space-x-2 mx-4 mt-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* Header */}
      <View className="mt-5">
        <Text className="text-[35px] font-normal text-center tracking-wider">
          Atomic Habits
        </Text>
        <View className="h-[1.5px] w-full bg-[#000000] mt-4" />
      </View>
      {/* Content */}
      <View className="mx-2 mt-5 space-y-3">
        <Text className="text-2xl font-medium">1- Page Summary</Text>
        <Text className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          dolorem doloribus cum nobis praesentium laboriosam distinctio
          accusamus dicta vel ut?
        </Text>
      </View>
    </View>
  );
}
