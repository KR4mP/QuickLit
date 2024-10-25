import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import SmallBookDetails from "./SmallBookDetails";
import { db, auth } from "../firebase_configure";
import {
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  getDoc,
  doc,
  where,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function BookList({ title }) {
  const navigation = useNavigation();

  const [bookSummaries, setBookSummaries] = useState([]);
  const [userPreferredCategories, setUserPreferredCategories] = useState([]);

  useEffect(() => {
    const fetchBookSummaries = async () => {
      try {
        const booksCollectionRef = collection(db, "books");

        const user = auth.currentUser;
        const userId = user.uid;
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);
        const userData = userDoc.data();
        const userCategories = userData.categories;

        let queryRef;

        if (title === "For You") {
          setUserPreferredCategories(userCategories);
          if (userCategories.length > 0) {
            queryRef = query(
              booksCollectionRef,
              where("category", "in", userCategories),
              limit(5)
            );
          } else {
            // Handle the case when userCategories is empty
            console.log("User categories is empty");
          }
        } else if (title === "Latest") {
          // Sort books by time added
          queryRef = query(
            booksCollectionRef,
            limit(5),
            orderBy("addedAt", "desc")
          );
        } else if (title === "Popular") {
          // Sort books by popularity (most read)
          queryRef = query(
            booksCollectionRef,
            limit(5),
            orderBy("readCount", "desc")
          );
        } else {
          // Invalid title, handle this scenario
          console.log("Invalid title");
          return;
        }

        const snapshot = await getDocs(queryRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookSummaries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookSummaries();
  }, [title]);

  const handleMoreButtonPress = () => {
    if (title === "For You") {
      // Navigate to the page showing books according to user's preferred categories
      navigation.navigate("ForYouBooks");
    } else if (title === "Latest") {
      // Navigate to the page showing most recently added books
      navigation.navigate("LatestBooks");
    } else if (title === "Popular") {
      // Navigate to the page showing most read books
      navigation.navigate("PopularBooks");
    }
  };

  return (
    <View style={{ marginTop: 6, marginBottom: 6 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 28, color: "#290f36" }}>{title}</Text>
        <TouchableOpacity onPress={handleMoreButtonPress}>
          <Text style={{ fontSize: 20, fontWeight: "light", color: "#808080" }}>
            more <Entypo name="arrow-long-right" size={20} color="#808080" />
          </Text>
        </TouchableOpacity>
      </View>
      {/* Adding Booklist */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {bookSummaries.map((book) => (
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
    </View>
  );
}
