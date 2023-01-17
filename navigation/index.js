import React from 'react';
import { useAuth } from '../hooks/useAuth';
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import Loading from '../pages/Loading';
import app from '../firebaseConfig';
import { getAuth, User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
const auth = getAuth(app);



export default function RootNavigation() {
  const {user, loading} = useAuth(); // fix hook!!!
  

  return (
    <NavigationContainer>
        {user ? <UserStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};