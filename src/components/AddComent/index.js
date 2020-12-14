import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { gql, useMutation } from '@apollo/client'

const ADD_COMMENT = gql`
    mutation CreateComment($postId: Int!, $commentary: String!) {
        createComment(input: {postId: $postId, commentary: $commentary}) {
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
`

export default function AddComment({postId, refetch = null}) {
    const [commentary, setCommentary] = useState(null)

    const [createComment] = useMutation(ADD_COMMENT, {
        update(cache, { data: { createComment } }) {
            cache.modify({
                id: `Post:${postId}`,
                fields: {
                    comments(existingComments = []) {
                        const newCommentRef = cache.writeFragment({
                            data: createComment,
                            fragment: gql`
                                fragment Comment on Post {
                                    id
                                    commentary
                                    liked
                                    author {
                                        id
                                        name
                                        image
                                    }
                                }
                            `
                        })
                        return [...existingComments, newCommentRef]
                    }
                }
            })
        }
    })

    const submit = () => {
        if (commentary && commentary.trim() !== '') {
            createComment({
                variables: {
                    postId: postId,
                    commentary: commentary
                }
            }).then(() => {
                setCommentary(null)
                if(refetch !== null && refetch !== undefined) {
                    refetch()
                }
            })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.textInput}
            value={commentary}
            placeholder="Adicione um comentário..."
            multiline
            autoCorrect={false}
            showsVerticalScrollIndicator={false}
            maxLength={191}
            onChangeText={commentary => setCommentary(commentary)}
            />
            <TouchableOpacity style={styles.btnSubmit} onPress={submit}>
                <Icon 
                name="paper-plane" 
                size={20}
                color="black"
                accessibilityLabel="Salvar"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textInput: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: '#fff',
        color: '#000'
    },
    btnSubmit: {
        backgroundColor: '#fff',
        padding: 10
    }
})