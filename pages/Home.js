import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import { useAuth } from '../hooks/useAuth';
import UserStack from '../navigation/UserStack';



function Home({ navigation }) {
    const auth = useAuth();
    return (
        <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome Home, {auth.user.email}</Text>
            <TouchableOpacity onPress={auth.onSignOut}><Text>LOGOUT</Text></TouchableOpacity>
        </View>
    )
}

export default Home;