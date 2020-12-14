import React, { useState, useContext } from 'react'
import { 
    View, 
    Image, 
    Text, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    Animated,
    StyleSheet 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AddComment from '../AddComent'
import avatar from '../../assets/avatar.png'
import heart from '../../assets/heart.png'
import heartOutline from '../../assets/heartOutline.png'
import { gql, useMutation } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import ApolloAuthContext from '../../contexts/apolloAuth'

const ADD_LIKE_POST = gql`
    mutation AddLikePost($postId: Int!) {
        addLikePost(postId: $postId) {
            id
            user {
                id
                name
                image
            }
        }
    }
`

const DELETE_LIKE_POST = gql`
    mutation DeleteLikePost($postId: Int!) {
        deleteLikePost(postId: $postId)
    }
`

export default function Post({item}) {
    let lastTap = null

    const { user } = useContext(ApolloAuthContext)

    const [liked, setLiked] = useState(item.liked)
    const [animatedValue] = useState(new Animated.Value(0))

    const [addLikePost] = useMutation(ADD_LIKE_POST, {
        update(cache, { data: { addLikePost } }) {
            cache.modify({
                id: cache.identify(item),
                fields: {
                    likes(existingLikes = []) {
                        const newLikeRef = cache.writeFragment({
                            data: addLikePost,
                            fragment: gql`
                                fragment LikePost on Post {
                                    id
                                    user {
                                        id
                                        name
                                        image
                                    }
                                }
                            `
                        })
                        return [...existingLikes, newLikeRef]
                    }
                }
            })
        }
    })

    const [deleteLikePost] = useMutation(DELETE_LIKE_POST, {
        update(cache) {
            cache.modify({
                id: cache.identify(item),
                fields: {
                    likes(existingLikes = [], { readField }) {
                        existingLikes.filter(likeRef => {
                            const userLikeRef = cache.identify(readField('user', likeRef))
                            const userLikeId = parseInt(userLikeRef.split(':')[1])
                            return user.id !== userLikeId
                        })
                    }
                }
            })
        }
    })

    const navigation = useNavigation()

    const iconGroup = {
        color: '#363636',
        size: 20,
        position: 'absolute'
    }

    const toggleLiked = () => {
        setLiked(!liked)
        if (!liked) {
            Animated.sequence([
                Animated.spring(animatedValue, { toValue: 1, useNativeDriver: true }),
                Animated.spring(animatedValue, { toValue: 0, useNativeDriver: true }),
            ]).start()
            addLikePost({
                variables: { 
                    postId: item.id
                }
            })
        } else {
            deleteLikePost({
                variables: { 
                    postId: item.id
                } 
            })
        }
    }

    const navigateLikes = () => {
        if(item?.likes[0]) navigation.navigate('Likes', { likes: item.likes })
    }

    const navigateComments = () => {
        if(item?.comments[0]) navigation.navigate('Comments', { postId: item.id })
    }

    const handleDoubleTap = () => {
        const now = Date.now()
        const DOUBLE_PRESS_DELAY = 300
        if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
            toggleLiked()
        } else {
            lastTap = now
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={item.author.image ? { uri: item.author.image } : avatar } />
                <Text style={styles.name}>{item.author.name}</Text>
            </View>

            <TouchableWithoutFeedback onPress={handleDoubleTap}>
                <View>
                    <Image 
                    style={styles.imagePost}
                    source={{ uri: item.image }}
                    />
                    <View style={styles.overlay}>
                        <Animated.Image
                        source={heart}
                        style={[styles.overlayHeart, {
                            opacity: animatedValue,
                            transform: [{
                                scale: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.7, 1.5],
                                }),
                            }]
                         }]}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.actions}>
                <View style={styles.containerIcons}>
                    <View style={styles.icons}>
                        <TouchableOpacity style={styles.btnAction} onPress={toggleLiked}>
                            <Image 
                            source={liked ? heart : heartOutline}
                            style={styles.heartIcon}
                            resizeMode="cover" 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnAction} onPress={navigateComments}>
                            <Icon name="comment" {...iconGroup} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.label} onPress={navigateLikes}>
                    Curtido por {
                    item?.likes[0] ? 
                    <Text style={styles.name}> {item.likes[0].user.name} </Text> : 
                    '0 pessoas'
                    }
                </Text>

                <Text style={styles.label} onPress={navigateComments}>
                    <Text style={styles.name}>{item.author.name}</Text> {item.description}
                </Text>

                <TouchableOpacity style={styles.btnComment} onPress={navigateComments}>
                    <Text style={[styles.label, {color: '#777'}]}>
                        Ver todos os comentarios
                    </Text>
                </TouchableOpacity>

            </View>

            <AddComment postId={item.id} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    header: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10
    },
    name: {
        fontWeight: 'bold'
    },
    label: {
        paddingTop: 0,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15
    },
    imagePost: {
        width: '100%',
        aspectRatio: 1
    },
    overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
        overlayHeart: {
        tintColor: '#fff',
    },
    description: {
        padding: 15,
        lineHeight: 18
    },
    actions: {
        paddingTop: 10,
        paddingRight: 5
    },
    containerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    heartIcon : {
        height: 20, 
        width: 20
    },
    btnAction: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    btnComment: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5
    }
})