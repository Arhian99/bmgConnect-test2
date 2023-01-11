import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
/* import FinishSignup from './pages/FinishSignup'; */

const Stack = createNativeStackNavigator();



function UserStack() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            {/* <Stack.Screen name='FinishSignup' component={FinishSignup} /> */}
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    );
}

export default UserStack;

