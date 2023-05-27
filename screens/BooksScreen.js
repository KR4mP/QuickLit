import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import Category from "../components/Category";

export default function BooksScreen() {
  return (
    <View
      className="flex-1 bg-[#F4F8FF]"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      {/* TopBar */}
      <View className="mx-3 mt-5">
        <Text className="text-3xl font-medium text-[#290f36]">Books</Text>
        <Text className="text-[28px] font-normal text-[#290f36] mt-6">
          Categories
        </Text>
        <View
          className="w-[full] border my-3"
          style={{ borderColor: "rgba(41, 15, 54, 0.7)" }}
        />
        <ScrollView>
          <View className="flex-wrap flex-row justify-between">
            <Category
              title={"Business"}
              icon={"business-center"}
              iconname={"MaterialIcons"}
            />
            <Category
              title={"Career"}
              icon={"trending-up"}
              iconname={"Feather"}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
