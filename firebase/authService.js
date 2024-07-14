// src/authService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './firebase.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signup = async (username, email, password) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update user profile with username
    await updateProfile(auth.currentUser, { displayName: username });

    // Store user data in AsyncStorage
    await AsyncStorage.setItem('userData', JSON.stringify(userCredential.user));

    return userCredential.user;
  } catch (error) {
    console.error("Error signing up: ", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    // Sign in user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Check if userCredential.user is valid
    if (userCredential.user) {
      // Store user data in AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userCredential.user));
    } else {
      throw new Error("User data is null or undefined after login");
    }

    return userCredential.user;
  } catch (error) {
    console.error("Error logging in: ", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    // Implement sign out logic here, if needed
    // Clear user data from AsyncStorage
    await AsyncStorage.removeItem('userData');
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};
