import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function Loading() {
    return (
        <View style={{ justifyContent: 'center', alignItem: 'center', marginBottom: 0, marginTop: 5 }}>
            <ActivityIndicator size='large' color='#35AAFF' />
        </View>
    )
}