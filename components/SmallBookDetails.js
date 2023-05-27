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
        });
      }}
    >
      <View className="border rounded-lg">
        <View className="h-[190px] w-[180px] bg-[#427DA2] p-3 rounded-t-md flex-row items-center justify-center">
          <Image
            source={{ uri: imgSrc }}
            className="h-[160px] w-[110px] self-center rounded-lg"
            style={{ resizeMode: "contain" }}
          />
        </View>
        {/* Book Info */}
        <View className="rounded-b-lg bg-white">
          <Text className="mx-4 mt-3 text-[#989898] text-[16px]">
            <FontAwesome name="star" size={16} color="#989898" /> {category}
          </Text>
          <Text className="mx-4 mt-1 text-lg font-semibold">{title}</Text>
          <Text className="mx-4 mt-1 mb-2 text-[#989898] text-[16px]">
            {author}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
