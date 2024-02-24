// firebase.js

import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc,  } from 'firebase/firestore';


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUz4N9-vw1QZK13UM7P2vU6PizuMZXydA",
  authDomain: "foodrecipe-app-3ad66.firebaseapp.com",
  projectId: "foodrecipe-app-3ad66",
  storageBucket: "foodrecipe-app-3ad66.appspot.com",
  messagingSenderId: "114909984086",
  appId: "1:114909984086:web:12d5159b8dc461a4e512f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

const createUserWithEmailPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password);
};

const signInWithEmailPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = () => signOut(auth);

const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

// Firestore
const db = getFirestore(app);

const createUserDocument = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log(`Error creating the user`, error.message);
        }
    }
    return userRef;
};


  


export {
    auth,
    signInWithGoogle,
    db,
    createUserDocument,
    createUserWithEmailPassword,
    signInWithEmailPassword,
    signOutUser,
    onAuthStateChangedListener,


};
