import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import FormButton from '../components/FormButton';


function Loading() {
    return ( 
        <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Loading...</Text></View>
    );
}

export default Loading;