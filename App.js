import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import react from 'react';


import RootNavigation from './navigation/index';
import AuthProvider from './contexts/authContext';

export default function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  )
};


/* 
<Login />
<Signup />
<FinishSignup />
<Home /> 
*/


/* 
<NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='FinishSignup' component={FinishSignup} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
</NavigationContainer>
*/