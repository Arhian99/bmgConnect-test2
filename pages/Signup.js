import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';


function Signup({ navigation }) {
    return (
        <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is the Signup Screen</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('FinishSignup')}><Text>Finish Signup</Text></TouchableOpacity>
        </View>
    );
}

export default Signup;
