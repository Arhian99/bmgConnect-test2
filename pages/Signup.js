import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import FormButton from '../components/FormButton';
import { useAuth } from '../hooks/useAuth';

function Signup({ navigation }) {

    const auth = useAuth();
    let pass;
    let passMatch;

    return (
        <KeyboardAvoidingView style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput placeholder='Name' onChangeText={auth.setName} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>
            <TextInput placeholder='Email' onChangeText={auth.setEmail} textContentType={'emailAddress'} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>
            {/* is the pass and pass match secure??
            validate this form before sign in */}
            <TextInput placeholder='New Password' onChangeText={(text) => pass=text} textContentType={'password'} secureTextEntry={true} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>
            <TextInput placeholder='Repeat Password' onChangeText={(password) => {if (pass === password) {auth.setPassword(password), passMatch=true} else passMatch=false}} textContentType={'password'} secureTextEntry={true} style={{width: '80%', borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, borderColor: 'royalblue', marginVertical: 10}}></TextInput>

            <FormButton title="Register" onPress={auth.onSignup} icon={<Icon name='log-in-outline' size={20} color={'white'}/>} containerStyle={{margin: 10}} buttonStyle={{paddingVertical: 10, paddingHorizontal: 40, borderRadius: 100}} />
        </KeyboardAvoidingView>
    );
}

export default Signup;
