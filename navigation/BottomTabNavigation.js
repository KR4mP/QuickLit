import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import BooksScreen from "../screens/BooksScreen";
import LibraryScreen from "../screens/LibraryScreen";

import { Ionicons } from "@expo/vector-icons";
import BookSearchScreen from "../screens/BookSearchScreen";

const homeName = "Home";
const booksName = "Books";
const searchName = "Search";

export default function BottomTabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === booksName) {
            iconName = focused ? "book" : "book-outline";
          } else if (rn === searchName) {
            iconName = focused ? "search" : "search-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#B3CEFA",
        tabBarInactiveTintColorr: "#5D82A7",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          backgroundColor: "#290f36",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={BookSearchScreen} />
      <Tab.Screen name="Books" component={BooksScreen} />
    </Tab.Navigator>
  );
}
