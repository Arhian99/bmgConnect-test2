import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import FormButton from '../components/FormButton';

import { useAuth } from '../hooks/useAuth';
import UserStack from '../navigation/UserStack';


function Login({ navigation }) {

  const auth = useAuth();

  return ( 
    <KeyboardAvoidingView style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput placeholder='Email' textContentType={'emailAddress'} onChangeText={auth.setEmail} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>
      <TextInput placeholder='Password' textContentType={'password'} onChangeText={auth.setPassword} secureTextEntry={true} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>
      <FormButton title="Login" onPress={auth.onLogin} icon={<Icon name='log-in-outline' size={20} color={'white'}/>} containerStyle={{margin: 10}} buttonStyle={{paddingVertical: 10, paddingHorizontal: 40, borderRadius: 100}} />
      <TouchableOpacity onPress={()=> {navigation.navigate('Signup')}} ><Text>Not Registered? Signup</Text></TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Login;


/* 
  const [loading, setLoading] = useState(false); // describes state of the user (whether its found or looking)
  const [loggedIn, setLoggedIn] = useState(true); // describes whether user is logged in or not


  useEffect(() => {onAuthStateChanged(auth, (user) => {
    if(!user) {
      // NOT logged In
      setLoggedIn(false),
      setLoading(false)
    }
    else {
      //Logged In
      setLoggedIn(true),
      setLoading(true)
    }
  })}, []);



  /* if (loading) {
    return (
      <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Loading...</Text></View>
    )
  } */