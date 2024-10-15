// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection, where } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "countries-bootstrap-react-app.firebaseapp.com",
  projectId: "countries-bootstrap-react-app",
  storageBucket: "countries-bootstrap-react-app.appspot.com",
  messagingSenderId: "325202962573",
  appId: "1:325202962573:web:5fde84cc1e6a43e2675ac4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

const addFavouriteToFirebase = async (uid, name) => {
  try {
    await addDoc(collection(db, `users/${uid}/favourites`), { name });
    console.log("Favourite added to firebase");
  } catch (error) {
    console.log("Error removing favourite from firebase", error);
  }
};

const removeFavouriteFromFirebase = async (uid, name) => {
  try {
    if (!name) {
      console.error(
        "Error removing favourite from firebase: Name parameter undefined"
      );
      return;
    }
    const q = query(
      collection(db, `users/${uid}/favourites`),
      where("name", "==", name)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
      console.log("Favourite removed from Firebase");
    });
  } catch (error) {
    console.log("Error removing favourite from firebase", error);
  }
};

const clearFavouritesFromFirebase = async (uid) => {
  try {
    const q = query(collection(db, `users/${uid}/favourites`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
      console.log("Favourites cleared from firebase");
    });
  } catch (error) {
    console.log("Error clearing favourites from firebase", error);
  }
};

export {
  auth,
  db,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  addFavouriteToFirebase,
  removeFavouriteFromFirebase,
  clearFavouritesFromFirebase,
};
