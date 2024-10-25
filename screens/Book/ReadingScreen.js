import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ReadingScreen(props) {
  const book = props.route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-[#F4F8FF] relative">
      <StatusBar backgroundColor="#000" />
      <View className="flex-row items-center space-x-2 mx-4 mt-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* Header */}
      <ScrollView>
        <View className="mt-5">
          <Text className="text-[35px] font-normal text-center tracking-wider">
            {book.title}
          </Text>
          <View className="h-[1.5px] w-full bg-[#000000] mt-4" />
        </View>
        {/* Content */}
        <View className="mx-2 mt-5 space-y-3">
          <Text className="text-base">{book.summary}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
