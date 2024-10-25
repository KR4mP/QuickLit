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
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BookList from "../components/BookList";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../firebase_configure";
import { doc, getDoc } from "firebase/firestore";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          // User is not logged in, handle this scenario
          console.log("User is not logged in");
          setLoading(false); // Set loading to false when there's an error
          return;
        }
        const userId = user.uid;
        const userRef = doc(db, "users", userId); // Reference to the user document
        const userDoc = await getDoc(userRef); // Retrieve the user document
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const fetchedName = userData.name;
          setName(fetchedName);
        } else {
          // User document does not exist, handle this scenario
          console.log("User document does not exist");
        }
      } catch (error) {
        console.log("Error fetching user name:", error);
        // Handle the error appropriately (e.g., show an error message)
      } finally {
        setLoading(false); // Set loading to false after fetching the user name
      }
    };

    fetchUserName();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#290f36" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F4F8FF]">
      <ScrollView showsVerticalScrollIndicator={false} className="mx-3">
        {/* Top bar */}
        <View>
          {/* Greeting and Profile Pic */}
          <View className="mt-5 mb-7">
            <View className="flex-row justify-between items-center">
              <Text className="text-3xl font-medium text-[#290f36]">
                Hello {name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <Image
                  source={require("../assets/profile_picture.png")}
                  className={"w-[60px] h-[60px] rounded-full mr-3"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          className="w-full mb-5"
          style={{
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "#6A6A6A",
          }}
        />

        {/* Books Component */}
        <BookList title={"For You"} />
        <BookList title={"Latest"} />
        <BookList title={"Popular"} />
      </ScrollView>
      <StatusBar backgroundColor="#000" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    // Define styles for the scrollable content
    paddingVertical: 16, // Change this value as needed
  },
});
