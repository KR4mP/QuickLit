import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-[#F4F8FF] items-center justify-center relative"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <TouchableOpacity
        className="absolute top-14 left-5"
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        className="absolute top-14 right-5"
        onPress={() => navigation.navigate("Settings")}
      >
        <Ionicons name="settings-sharp" size={30} color="black" />
      </TouchableOpacity>

      {/* Personal Info */}
      <View className="items-center space-y-5">
        <Image
          source={require("../assets/kemal.jpg")}
          className={"w-[100px] h-[100px] rounded-full"}
        />
        <Text className="text-3xl font-medium mt-5">John</Text>
        <TouchableOpacity
          className="bg-[#427DA2] p-2 px-20 rounded-xl"
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text className="text-white text-lg">Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-10 space-y-4 w-full ml-4 px-3 mr-4">
        {/* <TouchableOpacity
          className="p-2 my-2 flex-row items-center"
          onPress={() => {
            navigation.navigate("Reviews");
          }}
        >
          <FontAwesome name="star" size={34} color="black" />
          <Text className="text-2xl ml-5">My Reviews</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          className="p-2 mt-2 flex-row"
          onPress={() => {
            navigation.navigate("Goals");
          }}
        >
          <MaterialCommunityIcons
            name="bullseye-arrow"
            size={34}
            color="black"
          />
          <Text className="text-2xl ml-5">Reading Goals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
