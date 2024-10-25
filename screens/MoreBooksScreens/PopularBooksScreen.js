import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { db } from "../../firebase_configure";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import SmallBookDetails from "../../components/SmallBookDetails";
import { Ionicons } from "@expo/vector-icons";

export default function PopularBooksScreen() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const booksCollectionRef = collection(db, "books");
        const popularBooksQuery = query(
          booksCollectionRef,
          orderBy("readCount", "desc"),
          limit(5)
        );
        const popularBooksSnapshot = await getDocs(popularBooksQuery);
        const popularBooks = popularBooksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(popularBooks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularBooks();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#F4F8FF] mx-2">
      <StatusBar backgroundColor="#000" />
      <View className="mt-3 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">
          Popular Books
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
      >
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
