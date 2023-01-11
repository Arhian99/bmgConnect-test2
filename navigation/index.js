import React from 'react';
import { useAuth } from '../hooks/useAuth';
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import Loading from '../pages/Loading';



export default function RootNavigation() {
  const {user, loading} = useAuth(); // fix hook!!!
  

  return (
    <NavigationContainer>
        {user ? <UserStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};