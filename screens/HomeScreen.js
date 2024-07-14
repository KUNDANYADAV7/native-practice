import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useAuth } from '../Context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const logoUrl = "https://aqad.ae/wp-content/uploads/2023/07/aqad-logo-1.png";

export default function HomeScreen({ isDrawerOpen }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [userName, setUserName] = useState(user?.displayName || 'User');

  useEffect(() => {
    if (user) {
      setUserName(user.displayName || 'User');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={[styles.header, isDrawerOpen && { backgroundColor: '#87CEEB' }]}>
        <Image source={{ uri: logoUrl }} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon name="menu" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.welcomeText}>Welcome, {userName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
