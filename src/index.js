import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloAuthProvider } from './contexts/apolloAuth'
import Routes from './routes'

export default function App() {
  return (
    <NavigationContainer>
      <ApolloAuthProvider>
        <Routes />
      </ApolloAuthProvider>
    </NavigationContainer>
  )
}
