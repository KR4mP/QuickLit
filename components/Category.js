import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Category({ title, icon, iconname }) {
  const navigation = useNavigation();

  const handleCategoryPress = () => {
    // Navigate to the page showing books related to the category
    navigation.navigate("CategoryBooks", { category: title });
  };

  return (
    <TouchableOpacity
      className="rounded-xl w-[180px] h-[110px] space-y-2 justify-center my-3 bg-[#427DA2] p-3 items-center"
      onPress={handleCategoryPress}
    >
      <MaterialIcons name="star" size={35} color="#F4F8FF" />

      <Text className="text-lg font-bold text-[#F4F8FF] text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
