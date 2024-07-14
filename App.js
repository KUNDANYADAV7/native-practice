// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { auth } from './firebase/firebase.config';
import { ToastProvider } from 'react-native-toast-notifications';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupListScreen from './screens/SignupListScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
       <ToastProvider>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Signuplist" component={SignupListScreen} />
      </Stack.Navigator>
      </ToastProvider>
    </NavigationContainer>
  );
}

export default App;