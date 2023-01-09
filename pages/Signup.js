import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import FormButton from '../components/FormButton';



function Signup({ navigation }) {
    return (
        <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput placeholder='Email' textContentType={'emailAddress'} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>
            <TextInput placeholder='New Password' textContentType={'password'} secureTextEntry={true} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>
            <TextInput placeholder='Repeat Password' textContentType={'password'} secureTextEntry={true} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>

            <FormButton title="Register" onPress={()=> navigation.navigate('Home')} icon={<Icon name='log-in-outline' size={20} color={'white'}/>} containerStyle={{margin: 10}} buttonStyle={{paddingVertical: 10, paddingHorizontal: 40, borderRadius: 100}} />
        </View>
    );
}

export default Signup;
