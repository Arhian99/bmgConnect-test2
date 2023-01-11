import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import app from '../firebaseConfig';
import { getAuth, User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
const auth = getAuth(app);


export const AuthContext = React.createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null); // check if like this, eliminate 'User'
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);

  
    function onSignup() {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signed in
            console.log(email, password); /// (testing purposes) eliminate for production
            const user = userCredential.user;

            console.log(`${user} is registered and signed in with credentials ${userCredential}`);

            setUser(user); // check if this needs to move to outside the parenthesis
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} : ${errorMessage}`)
        })
        
    };

    function onLogin() {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signed in
            const user = userCredential.user;
            console.log(`${user} is signed in with credentials ${userCredential}`);

            setUser(user); // make sure this is right, do you only pass the user credentials or the entire user object?
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} : ${errorMessage}`)
        })

    }

    function onSignOut() {
        signOut(auth)
        .then(() => console.log(`${user.email} is signed out`)) // check this syntax
    }

    useEffect(() => {onAuthStateChanged(auth, (user) => {
        if(user) {
          // Logged In
          setUser(user);
        }
        else {
          //NOT Logged In
          setUser(undefined);
        }

    },)}, []);


    return (
        <AuthContext.Provider value={{ user, loading, onSignup, onLogin
        , onSignOut, setName, setEmail, setPassword, setLoading }}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;