import React, { createContext, useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, concat } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const ApolloAuthContext = createContext({ loggedIn: false, user: {} })

export const ApolloAuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    const logoutLink = onError(({ graphQLErrors }) => {
        const hasUnauthorized = graphQLErrors && graphQLErrors.find(({message}) => {
          return message.includes("Unauthorized")
        })
        if (hasUnauthorized) {
          logout()
        }
    })
      
    const httpLink = new HttpLink({ 
        uri: 'https://backend-feedinstagram.herokuapp.com/graphql',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    
    const client = new ApolloClient({
        link: concat(logoutLink, httpLink),
        cache: new InMemoryCache()
    })

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@RNAuth:user')
            const storageToken = await AsyncStorage.getItem('@RNAuth:token')

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser))
                setToken(storageToken)
                setLoading(false)
            } else if (!storageUser && !storageToken) {
                setLoading(false)
            }
        }

        loadStorageData()
    }, [])

    async function login(user = {}, token = null) {
        setUser(user)
        setToken(token)

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(user))
        await AsyncStorage.setItem('@RNAuth:token', token)
    }

    function logout() {
        AsyncStorage.clear().then(() => {
            setUser(null)
            setToken(null)
        })
    }

    return (
        <ApolloAuthContext.Provider value={{ loggedIn: !! user, user, login, logout, loading }} >
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
        </ApolloAuthContext.Provider>
    )
}

export default ApolloAuthContext