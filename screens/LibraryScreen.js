// import {
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableNativeFeedback,
//   ScrollView,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import LibraryBookDetails from "../components/LibraryBookDetails";

// export default function LibraryScreen() {
//   const [type, setType] = useState("Not Started");
//   const [books, setBooks] = useState([]);

//   // Function to fetch books based on reading status
//   const fetchBooks = () => {
//     // Replace this with your actual logic to fetch books from the database
//     // based on the reading status (Not Started, Started, Finished)

//     // Mock data for demonstration purposes
//     const allBooks = [
//       {
//         id: 1,
//         title: "Atomic Habits",
//         desc: "Lorem Ipsum is simply dummy text of the printing..",
//         author: "James Clear",
//         category: "Motivation",
//         imgSrc:
//           "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF894,1000_QL80_.jpg",
//         status: "Not Started",
//       },
//       {
//         id: 2,
//         title: "The Power of Now",
//         desc: "Lorem Ipsum is simply dummy text of the printing..",
//         author: "Eckhart Tolle",
//         category: "Self Improvement",
//         imgSrc:
//           "https://m.media-amazon.com/images/I/51eycfo7i3L._SX331_BO1,204,203,200_.jpg",
//         status: "Started",
//       },
//       {
//         id: 3,
//         title: "The Alchemist",
//         desc: "Lorem Ipsum is simply dummy text of the printing..",
//         author: "Paulo Coelho",
//         category: "Fiction",
//         imgSrc: "https://m.media-amazon.com/images/I/51IKUhXkhDL._SY346_.jpg",
//         status: "Finished",
//       },
//     ];

//     // Filter books based on the selected reading status
//     const filteredBooks = allBooks.filter((book) => book.status === type);
//     setBooks(filteredBooks);
//   };

//   // Fetch books when the component mounts or the reading status changes
//   useEffect(() => {
//     fetchBooks();
//   }, [type]);

//   return (
//     <View
//       className="flex-1 bg-[#F4F8FF]"
//       style={{ paddingTop: StatusBar.currentHeight }}
//     >
//       <View className="mx-3 mt-5">
//         <Text className="text-3xl font-medium text-[#290f36]">Library</Text>
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Reading Status */}
//         <View className="flex-row justify-between">
//           <TouchableNativeFeedback
//             onPress={() => {
//               setType("Not Started");
//             }}
//           >
//             <Text
//               className={`text-lg mt-5 mx-3 ${
//                 type === "Not Started"
//                   ? "font-medium text-[#290f36] border-b-2 pb-1"
//                   : "text-gray-500"
//               }`}
//             >
//               Not Started
//             </Text>
//           </TouchableNativeFeedback>
//           <TouchableNativeFeedback
//             onPress={() => {
//               setType("Started");
//             }}
//           >
//             <Text
//               className={`text-lg mt-5 mx-3 ${
//                 type === "Started"
//                   ? "font-medium text-[#290f36] border-b-2 pb-1"
//                   : "text-gray-500"
//               }`}
//             >
//               Started
//             </Text>
//           </TouchableNativeFeedback>
//           <TouchableNativeFeedback
//             onPress={() => {
//               setType("Finished");
//             }}
//           >
//             <Text
//               className={`text-lg mt-5 mx-3 ${
//                 type === "Finished"
//                   ? "font-medium text-[#290f36] border-b-2 pb-1"
//                   : "text-gray-500"
//               }`}
//             >
//               Finished
//             </Text>
//           </TouchableNativeFeedback>
//         </View>
//         {/* Books and Details */}
//         <View className="mt-5 mx-3">
//           {books.map((book) => (
//             <LibraryBookDetails
//               key={book.id}
//               title={book.title}
//               desc={book.desc}
//               author={book.author}
//               category={book.category}
//               imgSrc={book.imgSrc}
//             />
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
