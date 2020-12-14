import React, { useState } from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import { TouchableOpacity, Image } from 'react-native'
import { gql, useMutation } from '@apollo/client'

import avatar from '../../assets/avatar.png'
import heart from '../../assets/heart.png'
import heartOutline from '../../assets/heartOutline.png'

const ADD_LIKE_COMMENT = gql`
    mutation AddLikeComment($commentId: Int!) {
        addLikeComment(commentId: $commentId) {
            id
        }
    }
`

const DELETE_LIKE_COMMENT = gql`
    mutation DeleteLikeComment($commentId: Int!) {
        deleteLikeComment(commentId: $commentId)
    }
`

export default function Commentary({ item }) {
    const [liked, setLiked] = useState(item.liked)

    const [addLikeComment] = useMutation(ADD_LIKE_COMMENT)

    const [deleteLikeComment] = useMutation(DELETE_LIKE_COMMENT)

    const toggleLiked = () => {
        setLiked(!liked)
        if (!liked) {
            addLikeComment({
                variables: { 
                    commentId: item.id
                }
            })
        } else {
            deleteLikeComment({
                variables: { 
                    commentId: item.id
                } 
            })
        }
    }

    return (
        <ListItem bottomDivider >
            <Avatar rounded source={item.author.image ? { uri: item.author.image } : avatar }/>
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: 'bold'}}>{item.author.name}</ListItem.Title>
                <ListItem.Subtitle style={{fontSize: 16}}>{item.commentary}</ListItem.Subtitle>
            </ListItem.Content>
            <TouchableOpacity onPress={toggleLiked}>
                <Image 
                source={liked ? heart : heartOutline}
                style={{height: 20, width: 20}}
                resizeMode="cover" 
                />
            </TouchableOpacity>
        </ListItem>
    )
}