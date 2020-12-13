import React, {useEffect} from 'react'
import { 
    Text,
    Alert,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import TextField from '../../components/TextField'
import Loading from '../../components/Loading'


const CREATERESETPASS_USER = gql`
    mutation CreatePasswordReset($email: String!) {
        createPasswordReset(email: $email)
    }
`
const validationSchema = Yup.object().shape({
    email: Yup
    .string()
    .email('O e-mail é inválido')
    .label('Email')
})

export default function ResetPassword() {
    const [createPasswordReset, { loading }] = useMutation(CREATERESETPASS_USER)
    const { handleSubmit, register, setValue, errors } = useForm({
        resolver: yupResolver(validationSchema)
    })

    useEffect(() => {
        register('email')
    }, [register])

    function onSubmit({email}) {
        console.log(email)
        createPasswordReset({
            variables: {
                email: email
            }
        }).then(response => {
            if (response.errors) {
                Alert.alert('Error', response.errors[0].message)
            }
            if (response.data) {
                Alert.alert('Success', 'Verifique seu email')
            }
        })
    }
    return (
        <KeyboardAvoidingView style={styles.main}>

            { loading && <Loading /> }

            <TextField
            placeholder="Email"
            autoCorrect={false}
            error={errors?.email}
            onChangeText={value => setValue('email', value)}
            />
            <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.submitText}>Recuperar Senha</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingTop: 45,
        paddingBottom: 60
    },
    btnSubmit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
    },
    textBlack: {
        color: '#000'
    },
    textBlue: {
        color: '#35AAFF'
    }
})