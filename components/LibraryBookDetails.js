import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function LibraryBookDetails({
  title,
  desc,
  author,
  category,
  imgSrc,
}) {
  return (
    <TouchableOpacity className="my-2 flex-row">
      <View className="w-[120px] bg-[#427DA2] p-3 rounded-l-lg flex-row items-center justify-center">
        <Image
          source={{ uri: imgSrc }}
          className="h-[160px] w-[110px] self-center rounded-lg"
          style={{ resizeMode: "contain" }}
        />
      </View>
      {/* Book Info */}
      <View className="rounded-r-lg bg-white flex-1 pl-6 py-2 justify-around">
        <Text className="text-xl font-semibold">{title}</Text>
        <Text className="text-[#989898] text-[16px]">Author: {author}</Text>
        <Text className="text-[#989898] text-[16px]">Category: {category}</Text>
      </View>
    </TouchableOpacity>
  );
}
