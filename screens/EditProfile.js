import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-[#F4F8FF] relative"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="flex-row items-center space-x-2 mx-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">
          Edit Profile
        </Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <View className="items-center space-y-5">
          <Image
            source={require("../assets/kemal.jpg")}
            className="w-[100px] h-[100px] rounded-full"
          />
          <TouchableOpacity className="bg-[#427DA2] p-2 px-12 rounded-xl">
            <Text className="text-white text-lg">Change Photo</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-14 space-y-4 w-full px-5">
          <View>
            <Text className="text-lg font-medium text-[#290f36]">Nickname</Text>
            <TextInput className="bg-white border p-2 rounded-sm mt-2" />
          </View>
          <View>
            <Text className="text-lg font-medium text-[#290f36]">Name</Text>
            <TextInput className="bg-white border p-2 rounded-sm mt-2" />
          </View>
        </View>
        <TouchableOpacity className="bg-[#577689] p-2 px-20 rounded-xl mt-10">
          <Text className="text-white text-lg">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
