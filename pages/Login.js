import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import FormButton from '../components/FormButton';


function Login({ navigation }) {
    return ( 
        <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is the Login Screen</Text>
            <Icon name='aperture-outline' size={20} />
            <FormButton title="Login" onPress={()=> navigation.navigate('Home')} icon={<Icon name='log-in-outline' size={20} />} containerStyle={{margin: 10}} buttonStyle={{padding: 10, borderRadius: 100}} />
            <TouchableOpacity onPress={()=> navigation.navigate('Signup')}><Text>Not Registered? Signup</Text></TouchableOpacity>



        </View>
    );
}

export default Login;