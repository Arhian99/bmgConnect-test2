import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Stack = createNativeStackNavigator();


function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            {/* <Stack.Screen name='FinishSignup' component={FinishSignup} /> */}
        </Stack.Navigator>
    );
}

export default AuthStack;