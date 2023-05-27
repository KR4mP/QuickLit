import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function Category({ title, icon, iconname }) {
  return (
    <TouchableOpacity className="w-[180px] flex-row space-x-4 my-3 bg-white p-3 items-center">
      {iconname == "Feather" ? (
        <Feather name={icon} size={24} color="#427DA2" />
      ) : iconname == "MaterialIcons" ? (
        <MaterialIcons name={icon} size={24} color="#427DA2" />
      ) : (
        <></>
      )}

      <Text className="text-xl">{title}</Text>
    </TouchableOpacity>
  );
}
