import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase_configure";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditProfile() {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          // User is not logged in, handle this scenario
          console.log("User is not logged in");
          return;
        }
        const userId = user.uid;
        const userRef = doc(db, "users", userId);
        const userData = await getDoc(userRef);

        if (userData.exists()) {
          const { name, nickname } = userData.data();
          setName(name);
          setNickname(nickname);
        } else {
          // User document does not exist, handle this scenario
          console.log("User document does not exist");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
        // Handle the error appropriately (e.g., show an error message)
      }
    };

    fetchUserData();
  }, []);

  const handleNicknameSave = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        // User is not logged in, handle this scenario
        console.log("User is not logged in");
        return;
      }

      const userId = user.uid;
      const userRef = doc(db, "users", userId);
      const updates = { nickname };
      await updateDoc(userRef, updates);
      console.log("Nickname updated successfully");
    } catch (error) {
      console.log("Error updating nickname:", error);
    }
  };

  const handleNameSave = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        // User is not logged in, handle this scenario
        console.log("User is not logged in");
        return;
      }

      const userId = user.uid;
      const userRef = doc(db, "users", userId);
      const updates = { name };
      await updateDoc(userRef, updates);
      console.log("Name updated successfully");
    } catch (error) {
      console.log("Error updating name:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F4F8FF] relative">
      <StatusBar backgroundColor="#000" />
      <View className="pt-3 pl-2 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">
          Edit Profile
        </Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <View className="items-center space-y-5">
          <Image
            source={require("../assets/profile_picture.png")}
            className="w-[100px] h-[100px] rounded-full"
          />
          {/* <TouchableOpacity className="bg-[#427DA2] p-2 px-12 rounded-xl">
            <Text className="text-white text-lg">Change Photo</Text>
          </TouchableOpacity> */}
        </View>
        <View className="mt-14 space-y-4 w-full px-5">
          <View>
            <Text className="text-lg font-medium text-[#290f36]">Nickname</Text>
            <TextInput
              className="bg-white border p-2 rounded-sm mt-2"
              value={nickname}
              onChangeText={setNickname}
            />
            <TouchableOpacity
              className="bg-[#577689] w-[220px] h-[50px] p-2 px-10 rounded-xl mt-2 self-center"
              onPress={handleNicknameSave}
            >
              <Text className="text-white text-lg">Save Nickname</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-lg font-medium text-[#290f36]">Name</Text>
            <TextInput
              className="bg-white border p-2 rounded-sm mt-2"
              value={name}
              onChangeText={setName}
            />
            <TouchableOpacity
              className="bg-[#577689] w-[220px] h-[50px] p-2 px-10 rounded-xl mt-2 self-center"
              onPress={handleNameSave}
            >
              <Text className="text-white text-lg text-center">Save Name</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
