import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase_configure";
import { doc, getDoc } from "firebase/firestore";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Logout successful
        console.log("Logout successful");
        // Navigate to the login screen or any other desired screen
        navigation.navigate("Welcome");
      })
      .catch((error) => {
        // Handle logout error
        console.error("Logout error:", error);
      });
  };

  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          // User is not logged in, handle this scenario
          console.log("User is not logged in");
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
      }
    };

    fetchUserName();
  }, []);

  return (
    <View
      className="flex-1 bg-[#F4F8FF] items-center justify-center relative"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <TouchableOpacity
        className="absolute top-5 left-5"
        onPress={() => navigation.navigate("Main")}
      >
        <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>

      {/* Personal Info */}
      <View className="items-center space-y-5">
        <Image
          source={require("../assets/profile_picture.png")}
          className={"w-[100px] h-[100px] rounded-full"}
        />
        <Text className="text-3xl font-medium mt-5">{name}</Text>
        <TouchableOpacity
          className="bg-[#427DA2] p-2 px-20 rounded-xl"
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text className="text-white text-lg">Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-10 space-y-4 w-full ml-4 px-3 mr-4">
        {/* <TouchableOpacity
          className="p-2 my-2 flex-row items-center"
          onPress={() => {
            navigation.navigate("Reviews");
          }}
        >
          <FontAwesome name="star" size={34} color="black" />
          <Text className="text-2xl ml-5">My Reviews</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          className="p-2 mt-2 flex-row"
          onPress={() => {
            navigation.navigate("Goals");
          }}
        >
          <MaterialCommunityIcons
            name="bullseye-arrow"
            size={34}
            color="black"
          />
          <Text className="text-2xl ml-5">Reading Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="p-2 mt-2 flex-row"
          onPress={() => navigation.navigate("Account")}
        >
          <MaterialCommunityIcons
            name="account-box-outline"
            size={36}
            color="black"
          />
          <Text className="text-2xl ml-5">Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 flex-row" onPress={handleLogout}>
          <FontAwesome name="sign-out" size={34} color="black" />
          <Text className="text-2xl ml-5">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
