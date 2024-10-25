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

export default function LatestBooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchLatestBooks = async () => {
      try {
        const booksCollectionRef = collection(db, "books");
        const latestBooksQuery = query(
          booksCollectionRef,
          orderBy("addedAt", "desc"),
          limit(5)
        );
        const latestBooksSnapshot = await getDocs(latestBooksQuery);
        const latestBooks = latestBooksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(latestBooks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestBooks();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#F4F8FF] mx-2">
      <StatusBar backgroundColor="#000" />
      <View className="mt-3 flex-row items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-medium text-[#290f36]">
          Latest Books
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
