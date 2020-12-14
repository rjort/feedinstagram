import React, { useEffect } from 'react'
import { View, Alert, FlatList } from 'react-native'
import { gql, useLazyQuery } from '@apollo/client'

import Loading from '../../components/Loading'
import Post from '../../components/Post'

const GET_POSTS = gql`
    query GetPosts {
        allPosts {
            id
            image
            description
            liked
            author {
                id
                name
                image 
            }
            likes {
                id
                user {
                    id
                    name
                    image
                }
            }
            comments {
                id
                commentary
                liked
                author {
                    id
                    name
                    image
                }
            }
        }
    }
`

export default function Feed() {
    const [getPosts, { loading, error, data, refetch }] = useLazyQuery(GET_POSTS)

    useEffect(() => {
        const abortController = new AbortController()

        getPosts()

        return function cleanup() {
            abortController.abort()
        }
    }, [getPosts])

    if (loading) return <Loading />
    if (error) return Alert.alert('Error', error.message)

    return (
        <View>
            <FlatList
            data={data?.allPosts}
            keyboardDismissMode={'none'}
            keyExtractor={item => item.id.toString()}
            refreshing={data?.networkStatus === 4}
            onRefresh={() => refetch()}
            renderItem={({item}) => <Post item={item} />}
            />
        </View>
    )
}