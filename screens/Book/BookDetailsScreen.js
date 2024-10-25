import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function BookDetailsScreen(props) {
  const book = props.route.params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F8FF" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 500,
            backgroundColor: "#427DA2",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: book.imgSrc }}
            style={{ width: 175, height: 250, resizeMode: "contain" }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 30,
              marginTop: 6,
              letterSpacing: 1,
            }}
          >
            {book.title}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              marginTop: 4,
              letterSpacing: 1,
            }}
          >
            {book.author}
          </Text>
        </View>
        <View style={{ marginHorizontal: 16, marginTop: 20 }}>
          <Text
            style={{
              color: "#1D002D",
              fontSize: 30,
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            About Book
          </Text>
          <Text style={{ marginTop: 10, color: "gray" }}>{book.desc}</Text>
        </View>
      </ScrollView>
      <View
        className="items-center justify-center"
        style={{ paddingBottom: 20 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#427DA2",
            height: 55,
            width: 300,
            alignSelf: "center",
            borderRadius: 30,
            justifyContent: "center",
            marginTop: 10,
          }}
          onPress={() =>
            navigation.navigate("ReadingScreen", {
              title: book.title,
              desc: book.desc,
              author: book.author,
              imgSrc: book.imgSrc,
              summary: book.summary,
            })
          }
        >
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
            Start Reading
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor="#000" />
    </SafeAreaView>
  );
}
