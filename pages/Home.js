import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';



function Home({ navigation }) {
    return (
        <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is the Home Screen</Text>
            <TouchableOpacity><Text>LOGOUT</Text></TouchableOpacity>
        </View>
    );
}

export default Home;