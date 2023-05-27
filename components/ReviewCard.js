import { View, Text, Image } from "react-native";
import React from "react";

export default function ReviewCard({ imageSrc, rating, title, comment }) {
  return (
    <View className="p-4 rounded-lg flex-row space-x-4">
      <View>
        <Image
          source={{ uri: imageSrc }}
          className="h-[160px] w-[110px] rounded-lg"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="flex-1 space-y-4 justify-center">
        <Text className="text-lg font-bold">{title}</Text>
        <Text className="text-gray-500">{comment}</Text>
        <View className="flex-row items-center space-x-2">
          <Text className="">Rating: {rating}</Text>
        </View>
      </View>
    </View>
  );
}
