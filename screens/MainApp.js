import { useAuth } from "../Context/AuthContext";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import DashboardScreen from "./DashboardScreen";
import ProfileScreen from "./ProfileScreen";
import SignupListScreen from "./SignupListScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MainApp() {
  const { user, loading,initialRoute } = useAuth();

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Drawer.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }} drawerContent={props => <CustomDrawerContent {...props} />} >
     {user ? (
        <>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Signuplist" component={SignupListScreen} />
        </>
      ) : (
        <>
          <Drawer.Screen name="Splash" component={SplashScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
