import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

export default function () {
  const [defaulRating, setDefaultRating] = useState(3);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = "./../assets/star_filled.png";
  const starImgCorner = "./../assets/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View className="flex-row justify-center space-x-3">
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={key}
              onPress={() => setDefaultRating(item)}
            >
              <Image
                className="w-[30px] h-[30px]"
                style={{ resizeMode: "cover" }}
                source={
                  item <= defaulRating
                    ? require(starImgFilled)
                    : require(starImgCorner)
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <Text className="text-center text-[23px] mt-5">Please Rate Us</Text>
      <CustomRatingBar />
      <Text className="text-center text-[23px] mt-5">
        {defaulRating + "/" + maxRating.length}
      </Text>
    </View>
  );
}
