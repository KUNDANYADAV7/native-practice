// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { signOut } from '../firebase/authService'; // Adjust the import according to your auth service path

export default function HomeScreen() {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const user = JSON.parse(userData);
          setUserName(user.displayName || 'User');
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      await AsyncStorage.removeItem('userData');
      navigation.navigate('Login'); // Adjust the route name as per your login screen
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <Text>Welcome, {userName}</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
}
