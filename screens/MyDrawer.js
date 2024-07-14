// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from './screens/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import ContactScreen from './screens/ContactScreen';
// import SignupListScreen from './screens/SignupListScreen';
// import DashboardScreen from './screens/DashboardScreen';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { signOut } from '../firebase/authService';

// const Drawer = createDrawerNavigator();

// export default function MyDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="Contact" component={ContactScreen} />
//       <Drawer.Screen name="Signup List" component={SignupListScreen} />
//       <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//     </Drawer.Navigator>
//   );
// }


// src/MyDrawer.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ContactScreen from './ContactScreen';
import SignupListScreen from './SignupListScreen';
import DashboardScreen from './DashboardScreen';
import DrawerContent from './DrawerContent'; // Import DrawerContent

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Signup List" component={SignupListScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}
