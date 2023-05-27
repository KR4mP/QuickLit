import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView,
  StatusBar,
  Animated,
  StyleSheet,
} from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BookList from "../components/BookList";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-[#F4F8FF]"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <ScrollView showsVerticalScrollIndicator={false} className="mx-3">
        {/* Top bar */}
        <View>
          {/* Greeting and Profile Pic */}
          <View className="mt-5 mb-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-3xl font-medium text-[#290f36]">
                Hello John
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <Image
                  source={require("../assets/kemal.jpg")}
                  className={"w-[60px] h-[60px] rounded-full mr-3"}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Search Button */}
          <View className="mt-10 p-1 rounded-lg border border-[#290f36] flex-row pl-3 items-center">
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              className="ml-2"
              placeholder="Search"
              style={{ width: "100%" }}
            />
          </View>
        </View>

        {/* Books Component */}
        <BookList title={"For You"} />
        <BookList title={"Latest"} />
        <BookList title={"Popular"} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    // Define styles for the scrollable content
    paddingVertical: 16, // Change this value as needed
  },
});
