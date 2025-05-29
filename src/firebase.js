// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,
  getAuth,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlGFYSy0X0rt6ILxEG8LcxLOQSQVdY3Sk",
  authDomain: "netflix-clone-83ed1.firebaseapp.com",
  projectId: "netflix-clone-83ed1",
  storageBucket: "netflix-clone-83ed1.firebasestorage.app",
  messagingSenderId: "778997938682",
  appId: "1:778997938682:web:2c574efafe01f702fa8c43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (email, password, name) => {
  try {
    const res = await createUserWithEmailAndPasswordFirebase(
      auth,
      email,
      password
    );
    const user = res.user;

    // Set display name in Firebase Auth profile
    await updateProfile(user, { displayName: name });

    // Save user data in Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      email: email,
      authProvider: "local",
    });

    console.log("User signed up and saved to Firestore");
  } catch (error) {
    console.error("Signup error:", error.message);
    toast.error(error.code.split("/")[1].replace(/-/g, " ")); // Format error message
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in");
  } catch (error) {
    console.error("Login error:", error.message);
    toast.error(error.code.split("/")[1].replace(/-/g, " "));
  }
};

// Logout function
const logout = () => {
  signOutFirebase(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
      toast.error(error.code.split("/")[1].replace(/-/g, " "));
    });
};

// Export Firebase services and auth functions
export { auth, db, login, signup, logout };
