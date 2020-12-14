import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ResetPassword from '../pages/ResetPassword'

const AuthStack = createStackNavigator()

const AuthRoutes = () => (
    <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true }} />
        <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: 'Cadastrar' }} />
        <AuthStack.Screen name="ResetPassword" component={ResetPassword} options={{ title: 'Resetar senha' }} />
    </AuthStack.Navigator>
)

export default AuthRoutes