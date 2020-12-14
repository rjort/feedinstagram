import React from 'react'
import { View, FlatList } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import avatar from '../../assets/avatar.png'

export default function Likes({ route }) {
    const { likes } = route.params

    const keyExtractor = (item) => item.id.toString()

    const renderItem = ({ item }) => (
        <ListItem bottomDivider >
            <Avatar rounded source={item.user.image ? { uri: item.user.image } : avatar }/>
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: 'bold'}}>{item.user.name}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )

    return (
        <View>
            <FlatList
            data={likes}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            />
        </View>
    )
}