import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import RateBook from "../../components/RateBook";
import { useNavigation } from "@react-navigation/native";

export default function BookDetailsScreen(props) {
  const book = props.route.params;

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#F4F8FF] relative">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="h-[500px] bg-[#427DA2] items-center justify-center"
          style={{ paddingTop: StatusBar.currentHeight }}
        >
          <Image
            source={{ uri: book.imgSrc }}
            className="w-[175px] h-[250px] rounded-md"
            style={{ resizeMode: "contain" }}
          />
          <Text className="text-white text-3xl mt-4 tracking-wide">
            {book.title}
          </Text>
          <Text className="text-white text-lg mt-4 tracking-wide">
            {book.author}
          </Text>
        </View>
        <View className="mx-4">
          <View>
            <Text className=" text-[#1D002D] text-[30px] mt-5 font-bold tracking-wide">
              About Book
            </Text>
            <Text className="mt-4 text-gray-500">{book.desc}</Text>
          </View>
          {/* <View>
            <Text className="text-[30px] mt-5 font-bold tracking-wide">
              Reviews
            </Text>
          </View> */}
        </View>
      </ScrollView>
      <TouchableOpacity
        className="sticky bottom-10 bg-[#427DA2] h-[55px] w-[300px] self-center rounded-3xl justify-center"
        onPress={() => navigation.navigate("ReadingScreen")}
      >
        <Text className="text-white text-center text-lg">Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
}
