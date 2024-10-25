import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-[#F4F8FF] mx-3">
      <View className="mt-3 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">Settings</Text>
      </View>
      <View className=" my-3 space-y-5">
        {/* <TouchableOpacity
          className="flex-row items-center space-x-2 my-2"
          onPress={() => navigation.navigate("Subscription")}
        >
          <MaterialCommunityIcons
            name="card-account-details-outline"
            size={50}
            color="black"
          />
          <Text className="text-2xl font-medium text-[#290f36]">
            Subscription
          </Text>
        </TouchableOpacity> */}
      </View>
      <StatusBar backgroundColor="#000" />
    </SafeAreaView>
  );
}
