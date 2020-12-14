import React, { useState } from 'react'
import { TextInput, Text, StyleSheet } from 'react-native'

export default function TextField({ error, ...inputProps }) {
    return (
        <>
            <TextInput
                style={[styles.textInput, !!error && styles.borderError]}
                onChange={() => error = {}}
                {...inputProps}
            />
            { !!error && <Text style={styles.errorMessage}>{error.message}</Text> }
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        padding: 10
    },
    borderError: {
        borderWidth: 1,
        marginBottom: 0,
        borderColor: 'rgba(200,0,50,1)'
    },
    errorMessage: {
        fontSize: 12,
        color: 'rgba(200,0,50,1)',
        textAlign: 'center',
        marginBottom: 15,
    }
})
