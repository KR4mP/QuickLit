import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function AccountScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-[#F4F8FF] space-x-2"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="mx-3 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">Account</Text>
      </View>
      <View className="mt-5 space-y-10">
        <View className="mx-4">
          <Text className="text-[27px] font-medium text-[#290f36]">
            Logged-In
          </Text>
          <Text className="text-lg font-medium text-[#8b8b8b]">
            johndoe@gmail.com
          </Text>
        </View>
        <View className="mx-4">
          <Text className="text-[27px] font-medium text-[#290f36]">
            Change Password
          </Text>
          <View className="mt-5 space-y-4 w-full">
            <View>
              <Text className="text-lg font-medium text-[#290f36]">
                New Password
              </Text>
              <TextInput className="bg-white border p-2 rounded-sm mt-2" />
            </View>
            <View>
              <Text className="text-lg font-medium text-[#290f36]">
                Confirm Password
              </Text>
              <TextInput className="bg-white border p-2 rounded-sm mt-2" />
            </View>
          </View>
          <TouchableOpacity className="bg-[#5E5065] p-2 px-20 rounded-xl mt-10 self-center">
            <Text className="text-white text-lg">Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
