import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ReadingGoalsScreen() {
  const navigation = useNavigation();

  // const [goals, setGoals] = useState([]);
  // useEffect(() => {
  //   const fetchGoals = async () => {
  //     const response = await fetch(
  //       "https://reactnative.dev/movies.json"
  //     );
  //     const json = await response.json();
  //     setGoals(json.movies);
  //   };
  //   fetchGoals();
  // }, []);

  // const goals = [
  //   {
  //     id: 1,
  //     title: "Learn React Native",
  //   },
  //   {
  //     id: 2,
  //     title: "Learn React",
  //   },
  //   {
  //     id: 3,
  //     title: "Learn JavaScript",
  //   },
  // ];
  return (
    <View
      className="flex-1 bg-[#F4F8FF]"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="mx-3 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">Goals</Text>
      </View>
    </View>
  );
}
