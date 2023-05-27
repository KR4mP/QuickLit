import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SubscriptionScreen() {
  return (
    <View
      className="flex-1 bg-[#F4F8FF] space-x-2"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="mx-3 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">
          Subscription
        </Text>
      </View>
    </View>
  );
}
