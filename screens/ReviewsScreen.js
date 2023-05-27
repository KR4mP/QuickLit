import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ReviewCard from "../components/ReviewCard";

export default function ReviewsScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-[#F4F8FF] space-x-2"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="mx-3 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">Reviews</Text>
      </View>
      <ScrollView className="mt-2">
        <ReviewCard
          imageSrc="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF894,1000_QL80_.jpg"
          rating={5}
          title="Atomic Habits"
          comment="A book about what makes life so good."
        />
      </ScrollView>
    </View>
  );
}
