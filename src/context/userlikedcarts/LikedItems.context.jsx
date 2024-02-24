// // LikedItems.context.jsx
// import React, { createContext, useContext, useState } from 'react';
// import { getFavoritesFromFirestore } from '../../utils/firebase/firebase'; // Import the function to fetch liked items from Firestore

// const LikedItemsContext = createContext({
//   likedItems: [],
//   fetchLikedItems: () => {}, // Function to fetch liked items
// });

// export const useLikedItemsContext = () => useContext(LikedItemsContext);

// export const LikedItemsProvider = ({ children }) => {
//   const [likedItems, setLikedItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Function to fetch liked items from Firestore
//   const fetchLikedItems = async () => {
//     setIsLoading(true);
//     try {
//       const favorites = await getFavoritesFromFirestore(); // Fetch liked items from Firestore
//       setLikedItems(favorites); // Update state with liked items
//     } catch (error) {
//       console.error('Error fetching liked items:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const value = {
//     likedItems,
//     fetchLikedItems, // Expose the fetchLikedItems function in the context value
//   };

//   return (
//     <LikedItemsContext.Provider value={value}>
//       {children}
//     </LikedItemsContext.Provider>
//   );
// };
