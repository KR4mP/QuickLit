import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { db, auth } from "../../firebase_configure";
import firebase from "firebase/app";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const CategorySelectionScreen = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategorySelection = (category) => {
    const index = selectedCategories.indexOf(category);
    if (index !== -1) {
      // Category already selected, remove it from the listw
      const updatedCategories = selectedCategories.filter(
        (item) => item !== category
      );
      setSelectedCategories(updatedCategories);
    } else {
      // Category not selected, add it to the list
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category);
  };

  const handleContinue = async () => {
    if (selectedCategories.length < 3) {
      // User has not selected at least 3 categories
      alert("Please select at least 3 categories");
      return;
    }

    try {
      // Check the authentication state
      const user = auth.currentUser;
      if (!user) {
        // User is not logged in, handle this scenario
        console.log("User is not logged in");
        return;
      }

      // Save selected categories to Firestore
      const userId = user.uid; // Get the current user's ID
      const userRef = doc(db, "users", userId); // Reference to the user document in Firestore

      const userSnapshot = await getDoc(userRef);
      if (!userSnapshot.exists()) {
        // User document doesn't exist, create it with initial field values
        await setDoc(userRef, { categories: selectedCategories });
      } else {
        // User document exists, update the categories field
        await updateDoc(userRef, { categories: selectedCategories });
      }

      // Alternatively, you can perform any other desired action here

      // Navigate to the next screen
      navigation.navigate("ReadingTimeSelection");
    } catch (error) {
      console.log("Error saving selected categories:", error);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  return (
    <View
      className="flex-1 items-center bg-[#F4F8FF] px-2"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <Text className="text-2xl font-bold mb-6 mt-5">
        Select at least 3 categories:
      </Text>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          marginTop: 5,
          marginBottom: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Arts/Design")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Arts/Design")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Arts/Design") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Arts/Design</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Business")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Business")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Business") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Biography")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Biography")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Biography") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Biography</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Career")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Career")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Career") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Career</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Communication")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Communication")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Communication") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Communication</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Creativity")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Creativity")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Creativity") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Creativity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Economics")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Economics")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Economics") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Economics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Education")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Education")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Education") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Education</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Entertainment")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Entertainment")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Entertainment") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Entertainment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Fiction")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Fiction")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Fiction") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-lg">Fiction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Food")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Food")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Food") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-lg">Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Health")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Health")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Health") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-lg">Health</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("History")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("History")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("History") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-lg">History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Law")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Law")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Law") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-lg">Law</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Leadership")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Leadership")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Leadership") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Leadership</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Lifestyle")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Lifestyle")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Lifestyle") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Lifestyle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Marketing")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Marketing")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Marketing") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Marketing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Media")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Media")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Media") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Media</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Mindfulness")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Mindfulness")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Mindfulness") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Mindfulness</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Money/Finance")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Money/Finance")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Money/Finance") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Money/Finance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Philosophy")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Philosophy")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Philosophy") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Philosophy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Productivity")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Productivity")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Productivity") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Productivity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Relationships")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Relationships")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Relationships") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Relationships</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Spirituality")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Spirituality")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Spirituality") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Spirituality</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-slate-200 rounded-lg p-2 py-4 mb-4 text-xl flex-row items-center w-[49%]"
          onPress={() => handleCategorySelection("Technology")}
        >
          <View
            className={`w-6 h-6 border-2 rounded-full justify-center items-center mr-1 ${
              isCategorySelected("Technology")
                ? "bg-[#1D002D] border-[#1D002D]"
                : "border-gray-300"
            }`}
          >
            {isCategorySelected("Technology") && (
              <Feather name="check" size={18} color="white" />
            )}
          </View>
          <Text className="text-xl">Technology</Text>
        </TouchableOpacity>
        {/* Add more categories as needed */}
      </ScrollView>
      <TouchableOpacity
        className="bg-[#1D002D] rounded-lg p-4 px-10 my-2"
        onPress={handleContinue}
      >
        <Text className="text-white text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategorySelectionScreen;
