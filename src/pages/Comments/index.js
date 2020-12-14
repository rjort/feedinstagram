import React from 'react'
import { View, FlatList, Alert } from 'react-native'
import AddComment from '../../components/AddComent'
import Commentary from '../../components/Commentary'
import { gql, useQuery } from '@apollo/client'
import Loading from '../../components/Loading'

const GET_COMMENTS = gql`
    query GetComments($postId: Int!) {
        postById(id: $postId) {
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

export default function Comments({ route }) {
    const { postId } = route.params

    const { loading, error, data, refetch } = useQuery(GET_COMMENTS, {
        variables: { 
            postId: postId
        }
    })

    if (loading) return <Loading />
    if (error) return Alert.alert('Error', error.message)

    return (
        <View style={{flex: 1}}>
            <FlatList
            keyboardDismissMode={'none'}
            removeClippedSubviews={false}
            data={data?.postById?.comments}
            keyExtractor={(item) => item.id.toString()}
            refreshing={data?.networkStatus === 4}
            onRefresh={() => refetch()}
            renderItem={({item}) => <Commentary item={item} />}
            ListFooterComponentStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
            contentContainerStyle={{ flexGrow: 1 }}
            ListFooterComponent={<AddComment postId={postId} refetch={refetch} />}
            />
        </View>
    )
}