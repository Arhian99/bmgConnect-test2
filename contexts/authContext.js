import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import app from '../firebaseConfig';
import { getAuth, User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
const auth = getAuth(app);


export const AuthContext = React.createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(() => {
        const _user = auth.currentUser;
        return _user;
    }); 
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);

  
    function onSignup() {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signed in
            const newUser = userCredential.user;
            newUser.displayName = name;
            console.log(email, password); /// (testing purposes) eliminate for production


            console.log(`${newUser.displayName} is registered and signed in with credentials ${newUser.email}`);

            setUser(newUser); // check if this needs to move to outside the parenthesis
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
            const loggedUser = userCredential.user;
            console.log(`${loggedUser.displayName} is signed in with credentials ${loggedUser.email}`);

            setUser(loggedUser); // make sure this is right, do you only pass the user credentials or the entire user object?
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} : ${errorMessage}`)
        })

    }

    function onSignOut() {
        signOut(auth)
        .then(() => {
            setUser(undefined);
            setEmail(undefined);
            setPassword(undefined);
            console.log(`${user.displayName} is signed out`)
        }) // check this syntax
    }

    useEffect(() => {onAuthStateChanged(auth, (firebaseUser) => {
        if(firebaseUser) {
          // Logged In
          const currentUser = firebaseUser;
          setUser(currentUser);
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