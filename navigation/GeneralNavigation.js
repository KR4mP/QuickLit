import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import ProfileScreen from "../screens/ProfileScreen";
import ReviewsScreen from "../screens/ReviewsScreen";
import ReadingGoalsScreen from "../screens/ReadingGoalsScreen";
import Settings from "../screens/Settings";
import EditProfile from "../screens/EditProfile";
import AccountScreen from "../screens/Settings/AccountScreen";
import SubscriptionScreen from "../screens/Settings/SubscriptionScreen";
import BookDetailsScreen from "../screens/Book/BookDetailsScreen";
import ReadingScreen from "../screens/Book/ReadingScreen";

export default function GeneralNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reviews"
          component={ReviewsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Goals"
          component={ReadingGoalsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Subscription"
          component={SubscriptionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReadingScreen"
          component={ReadingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
