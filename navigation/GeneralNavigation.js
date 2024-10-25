import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import ProfileScreen from "../screens/ProfileScreen";
import ReadingGoalsScreen from "../screens/ReadingGoalsScreen";
import Settings from "../screens/Settings";
import EditProfile from "../screens/EditProfile";
import AccountScreen from "../screens/Settings/AccountScreen";
import SubscriptionScreen from "../screens/Settings/SubscriptionScreen";
import BookDetailsScreen from "../screens/Book/BookDetailsScreen";
import ReadingScreen from "../screens/Book/ReadingScreen";
import WelcomeScreen from "../screens/Authentication/WelcomeScreen";
import LoginScreen from "../screens/Authentication/LoginScreen";
import SignupScreen from "../screens/Authentication/SignupScreen";
import CategorySelectionScreen from "../screens/User/CategorySelectionScreen";
import { auth } from "../firebase_configure";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import ReadingTimeSelectionScreen from "../screens/User/ReadingTimeSelectionScreen";
import NameInputScreen from "../screens/User/NameInputScreen";
import ForYouBooksScreen from "../screens/MoreBooksScreens/ForYouBooksScreen";
import LatestBooksPage from "../screens/MoreBooksScreens/LatestBooksScreen";
import PopularBooksScreen from "../screens/MoreBooksScreens/PopularBooksScreen";
import CategoryBooksScreen from "../screens/CategoryBooksScreen";

export default function GeneralNavigation() {
  const Stack = createNativeStackNavigator();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Unsubscribe the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Show a loading indicator while checking authentication state
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="Main"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Welcome"
              component={WelcomeScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Signup"
              component={SignupScreen}
            />
          </>
        )}

        {/* Screens for authenticated user */}
        <Stack.Screen
          name="CategoryPreferences"
          component={CategorySelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
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
        <Stack.Screen
          name="ReadingTimeSelection"
          component={ReadingTimeSelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NameInputScreen"
          component={NameInputScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForYouBooks"
          component={ForYouBooksScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LatestBooks"
          component={LatestBooksPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PopularBooks"
          component={PopularBooksScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoryBooks"
          component={CategoryBooksScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
