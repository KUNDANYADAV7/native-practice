import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider } from 'react-native-toast-notifications';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {AuthProvider } from './Context/AuthContext';
import MainApp from './screens/MainApp';

const Drawer = createDrawerNavigator();

function App() {
  return (
    
    <AuthProvider>
    <NavigationContainer>
      <ToastProvider>
        <MainApp />
      </ToastProvider>
    </NavigationContainer>
    </AuthProvider>
  );
}


export default App;
