import {
  View,
  Text,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import SmallBookDetails from "./SmallBookDetails";

export default function BookList({ title }) {
  return (
    <View className="mt-6 mb-6">
      <View className="flex-row justify-between items-center">
        <Text className="text-[28px] text-[#290f36]">{title}</Text>
        <TouchableHighlight>
          <Text className="text-xl font-light text-[#808080]">
            more <Entypo name="arrow-long-right" size={20} color="#808080" />
          </Text>
        </TouchableHighlight>
      </View>
      {/* Adding Booklist */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SmallBookDetails
          title="Atomic Habits"
          desc="lorem ipsum is simply dummy text of the printing.. asdasdasd"
          author="James Clear"
          category="Motivation"
          imgSrc={
            "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF894,1000_QL80_.jpg"
          }
        />
        <SmallBookDetails
          title="Atomic Habits"
          desc="Lorem Ipsum is simply dummy text of the printing.."
          author="James Clear"
          category="Motivation"
          imgSrc={
            "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF894,1000_QL80_.jpg"
          }
        />
        <SmallBookDetails
          title="Atomic Habits"
          desc="Lorem Ipsum is simply dummy text of the printing.."
          author="James Clear"
          category="Motivation"
          imgSrc={
            "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF894,1000_QL80_.jpg"
          }
        />
        <SmallBookDetails
          title="Atomic Habits"
          desc="Lorem Ipsum is simply dummy text of the printing.."
          author="James Clear"
          category="Motivation"
          imgSrc={
            "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF894,1000_QL80_.jpg"
          }
        />
      </ScrollView>
    </View>
  );
}
