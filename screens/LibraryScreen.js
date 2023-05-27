import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import LibraryBookDetails from "../components/LibraryBookDetails";

export default function LibraryScreen() {
  const [type, setType] = useState("Not Started");
  return (
    <View
      className="flex-1 bg-[#F4F8FF]"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="mx-3 mt-5">
        <Text className="text-3xl font-medium text-[#290f36]">Library</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Reading Status */}
        <View className="flex-row justify-between">
          <TouchableNativeFeedback
            onPress={() => {
              setType("Not Started");
            }}
          >
            <Text
              className={`text-lg mt-5 mx-3 ${
                type === "Not Started"
                  ? "font-medium text-[#290f36] border-b-2 pb-1"
                  : "text-gray-500"
              }`}
            >
              Not Started
            </Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              setType("Started");
            }}
          >
            <Text
              className={`text-lg mt-5 mx-3 ${
                type === "Started"
                  ? "font-medium text-[#290f36] border-b-2 pb-1"
                  : "text-gray-500"
              }`}
            >
              Started
            </Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              setType("Finished");
            }}
          >
            <Text
              className={`text-lg mt-5 mx-3 ${
                type === "Finished"
                  ? "font-medium text-[#290f36] border-b-2 pb-1"
                  : "text-gray-500"
              }`}
            >
              Finished
            </Text>
          </TouchableNativeFeedback>
        </View>
        {/* Books and Details */}
        <View className="mt-5 mx-3">
          <LibraryBookDetails
            title="Atomic Habits"
            desc="Lorem Ipsum is simply dummy text of the printing.."
            author="James Clear"
            category="Motivation"
            imgSrc={
              "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF894,1000_QL80_.jpg"
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
