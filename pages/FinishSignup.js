import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';


function FinishSignup({ navigation }) {
    return ( 
        <KeyboardAvoidingView style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is the Finish Signup Screen</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Text>Finish</Text></TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default FinishSignup;