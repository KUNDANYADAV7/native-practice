// src/DrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from '../firebase/authService';

export default function DrawerContent() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await signOut();
      // Navigate to login or initial screen
      navigation.navigate('Login');
    } catch (error) {
      console.error("Logout error: ", error);
      // Handle logout error
    }
  };

  return (
    <View style={ styles.container }>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  body: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20
  },
});
