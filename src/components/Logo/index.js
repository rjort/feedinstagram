import React from 'react'
import { Image, StyleSheet } from 'react-native'
import instagram from '../../assets/instagram.png'

export default function Logo() {
    return (
        <Image 
        style={styles.image}
        source={instagram}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        justifyContent: 'flex-start',
        width: 150,
        height: 150,
        resizeMode: 'center'
    }
})