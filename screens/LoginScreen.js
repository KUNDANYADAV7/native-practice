// // import { View, Text,Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
// // import React from 'react'
// // import Animated,{ FadeIn, FadeInUp, FadeOut , FadeInDown } from 'react-native-reanimated';
// // import { useNavigation } from '@react-navigation/native';

// // export default function LoginScreen() {
// //   const navigation = useNavigation();
// //   return (
// //     <View className="bg-white h-full w-full">
// //       <StatusBar barStyle="light"/> 
// //       <Image className="h-full w-full absolute" source={require('../assets/images/background.png')}/>
          

// //           {/* lights */}
// //       <View className="flex-row justify-around w-full absolute">
// //         <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className="h-[225] w-[90]" source={require('../assets/images/light.png')}/>
// //         <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} className="h-[160] w-[65]" source={require('../assets/images/light.png')}/>
// //       </View>


// //       {/* title and form */}
// //       <View className="h-full w-full flex justify-around pt-40 ">
// //         {/* Title */}
// //         <View className="flex items-center">
// //           <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
// //             Login
// //           </Animated.Text>
// //         </View>

// //         {/* Forms */}
// //         <View className="flex items-center mx-4 space-y-1 ">
// //           <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
// //           <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
// //           </Animated.View>
// //           <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
// //           <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
// //           </Animated.View>
// //           <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
// //             <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
// //              <Text className="text-xl font-bold text-white text-center">Login</Text>
// //             </TouchableOpacity>
// //           </Animated.View>
// //           <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
// //             <Text>Dont't have an account? </Text>
// //             <TouchableOpacity onPress={()=>navigation.push('Signup')}>
// //               <Text className="text-sky-600">SignUp</Text>
// //             </TouchableOpacity>
// //           </Animated.View>
// //         </View>
// //       </View>
// //     </View>
// //   )
// // }






// // src/screens/LoginScreen.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
// import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
// import { useNavigation } from '@react-navigation/native';
// import { login } from '../firebase/authService';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleLogin = async () => {
//     try {
//       const userCredential = await login(email, password);

//       // Store user data in AsyncStorage
//       await AsyncStorage.setItem('userData', JSON.stringify(userCredential.user));

//       // Navigate to home screen
//       navigation.navigate('Login');
//     } catch (error) {
//       console.error("Login error: ", error);
//       // Handle login error
//     }
//   };

//   return (
//     <View className="bg-white h-full w-full">
//       <StatusBar barStyle="light"/>
//       <Image className="h-full w-full absolute" source={require('../assets/images/background.png')}/>

//       <View className="flex-row justify-around w-full absolute">
//         <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className="h-[225] w-[90]" source={require('../assets/images/light.png')}/>
//         <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} className="h-[160] w-[65]" source={require('../assets/images/light.png')}/>
//       </View>

//       <View className="h-full w-full flex justify-around pt-40">
//         <View className="flex items-center">
//           <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
//             Login
//           </Animated.Text>
//         </View>

//         <View className="flex items-center mx-4 space-y-1">
//           <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
//             <TextInput placeholder='Email' placeholderTextColor={'gray'} value={email} onChangeText={setEmail}/>
//           </Animated.View>
//           <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
//             <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry value={password} onChangeText={setPassword}/>
//           </Animated.View>
//           <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
//             <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3" onPress={handleLogin}>
//               <Text className="text-xl font-bold text-white text-center">Login</Text>
//             </TouchableOpacity>
//           </Animated.View>
//           <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
//             <Text>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.push('Signup')}>
//               <Text className="text-sky-600">SignUp</Text>
//             </TouchableOpacity>
//           </Animated.View>
//         </View>
//       </View>
//     </View>
//   );
// }

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { login } from '../firebase/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const toast = useToast();

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      const userCredential = await login(email, password);

      // Store user data in AsyncStorage
      const userData = userCredential; // Assuming user data is valid JSON serializable
      console.log("User data to be stored:", userData);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      // Navigate to home screen
      toast.show('You have successfully logged in!', { type: 'success' });
      navigation.navigate('Home'); // Assuming 'Home' is the name of your home screen

       // Retrieve and log stored user data from AsyncStorage
       const storedUserData = await AsyncStorage.getItem('userData');
       console.log("Stored user data:", storedUserData);
    } catch (error) {
      toast.show(error.message, { type: 'danger' });
    }
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle="light"/>
      <Image className="h-full w-full absolute" source={require('../assets/images/background.png')}/>

      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className="h-[225] w-[90]" source={require('../assets/images/light.png')}/>
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} className="h-[160] w-[65]" source={require('../assets/images/light.png')}/>
      </View>

      <View className="h-full w-full flex justify-around pt-40">
        <View className="flex items-center">
          <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
            Login
          </Animated.Text>
        </View>

        <View className="flex items-center mx-4 space-y-1">
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
              placeholder='Email'
              placeholderTextColor={'gray'}
              value={email}
              onChangeText={setEmail}
              style={{ height: 40, paddingVertical: 0 }}
            />
            {errors.email && <Text className="text-red-500">{errors.email}</Text>}
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
              placeholder='Password'
              placeholderTextColor={'gray'}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={{ height: 40, paddingVertical: 0 }}
            />
            {errors.password && <Text className="text-red-500">{errors.password}</Text>}
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3" onPress={handleLogin}>
              <Text className="text-xl font-bold text-white text-center">Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('Signup')}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
