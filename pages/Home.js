import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import { useAuth } from '../hooks/useAuth';
import UserStack from '../navigation/UserStack';
import app from '../firebaseConfig';
import { getAuth, User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
const auth = getAuth(app);



function Home({ navigation }) {
    const {onSignOut} = useAuth();
    let displayName = auth.currentUser.displayName;
    return (
        <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome Home {displayName} !!!</Text>
            <TouchableOpacity onPress={onSignOut}><Text>LOGOUT</Text></TouchableOpacity>
        </View>
    )
}
export default Home;