import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SmallBookDetails({
  title,
  desc,
  author,
  category,
  imgSrc,
  summary,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="rounded-xl mt-6 border-[#290f36] mr-4"
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate("BookDetails", {
          title,
          desc,
          author,
          imgSrc,
          summary,
        });
      }}
    >
      <View className="border rounded-lg w-[180px]">
        <View className="h-[190px]  bg-[#427DA2] p-3 rounded-t-md flex-row items-center justify-center">
          <Image
            source={{ uri: imgSrc }}
            className="h-[160px] w-[150px] self-center"
            style={{ resizeMode: "contain" }}
          />
        </View>
        {/* Book Info */}
        <View className="rounded-b-lg bg-white">
          <View className="flex-row mx-2 mt-3 items-center space-x-1">
            <FontAwesome name="star" size={20} color="#CDDF2A" />
            <Text className=" text-[#989898] text-[14px]">{category}</Text>
          </View>
          <Text className="mx-3 mt-1 text-lg font-semibold">{title}</Text>
          <Text className="mx-2 mt-1 mb-2 text-[#989898] text-[16px]">
            {author}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
