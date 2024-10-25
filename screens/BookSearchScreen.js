import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { db } from "../firebase_configure";
import { collection, query, where, getDocs } from "firebase/firestore";
import SmallBookDetails from "../components/SmallBookDetails";

export default function BookSearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const booksCollectionRef = collection(db, "books");
      const searchQueryRef = query(
        booksCollectionRef,
        where("name", ">=", searchQuery),
        where("name", "<=", searchQuery + "\uf8ff")
      );
      const snapshot = await getDocs(searchQueryRef);
      const results = snapshot.docs.map((doc) => doc.data());
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      className="mx-2"
      style={{
        flex: 1,
        backgroundColor: "#F4F8FF",
        paddingTop: 15,
      }}
    >
      <StatusBar backgroundColor="#000" />
      <Text
        className="text-3xl font-medium text-[#290f36] mb-6"
        style={{
          fontSize: 30,
          color: "#290f36",
          marginBottom: 6,
        }}
      >
        Search Books
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by title"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.booksContainer}>
        {searchResults.map((item) => (
          <SmallBookDetails
            key={item.id} // Assign a unique key using the book's ID
            title={item.name}
            desc={item.about}
            author={item.author}
            category={item.category}
            imgSrc={item.image}
            summary={item.summary}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: "#290f36",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  booksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
