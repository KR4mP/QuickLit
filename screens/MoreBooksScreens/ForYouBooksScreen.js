import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { db, auth } from "../../firebase_configure";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";
import SmallBookDetails from "../../components/SmallBookDetails";
import { Ionicons } from "@expo/vector-icons";

export default function ForYouBooksScreen() {
  const [books, setBooks] = useState([]);
  const [userPreferredCategories, setUserPreferredCategories] = useState([]);

  useEffect(() => {
    const fetchForYouBooks = async () => {
      try {
        const user = auth.currentUser;
        const userId = user.uid;
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);
        const userData = userDoc.data();
        const userCategories = userData.categories;

        setUserPreferredCategories(userCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForYouBooks();
  }, []);

  useEffect(() => {
    if (userPreferredCategories.length > 0) {
      const fetchBooks = async () => {
        try {
          const booksCollectionRef = collection(db, "books");
          const forYouQuery = query(
            booksCollectionRef,
            where("category", "in", userPreferredCategories),
            orderBy("category")
          );
          const forYouSnapshot = await getDocs(forYouQuery);
          const forYouBooks = forYouSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setBooks(forYouBooks);
        } catch (error) {
          console.error(error);
        }
      };

      fetchBooks();
    }
  }, [userPreferredCategories]);

  return (
    <SafeAreaView className="flex-1 bg-[#F4F8FF] mx-2">
      <StatusBar backgroundColor="#000" />
      <View className="mt-3 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">For You</Text>
      </View>
      <ScrollView>
        {books.map((book) => (
          <SmallBookDetails
            key={book.id}
            title={book.name}
            desc={book.about}
            author={book.author}
            category={book.category}
            imgSrc={book.image}
            summary={book.summary}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
