import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { db } from "../firebase_configure";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import SmallBookDetails from "../components/SmallBookDetails";
import { StatusBar } from "expo-status-bar";

export default function CategoryBooksScreen({ route }) {
  const { category } = route.params;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchCategoryBooks = async () => {
      try {
        const booksCollectionRef = collection(db, "books");
        const categoryQuery = query(
          booksCollectionRef,
          where("category", "==", category),
          orderBy("name")
        );
        const categorySnapshot = await getDocs(categoryQuery);
        const categoryBooks = categorySnapshot.docs.map((doc) => doc.data());
        setBooks(categoryBooks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryBooks();
  }, [category]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F4F8FF",
      }}
    >
      <StatusBar backgroundColor="#000" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 16 }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#290f36",
            marginBottom: 12,
          }}
        >
          {category}
        </Text>
        {books.map((book) => (
          <SmallBookDetails
            key={book.id}
            title={book.title}
            author={book.author}
            imgSrc={book.imgSrc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
