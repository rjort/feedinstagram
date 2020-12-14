import React, {useEffect} from 'react'
import { 
    Text,
    Alert,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    View
 } from 'react-native'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import TextField from '../../components/TextField'
import Loading from '../../components/Loading'


const SIGNUP_USER = gql`
    mutation SignUp($name: String!, $email: String!, $password: String!) {
        signupUser(input:{name: $name, email: $email, password: $password}) {
            id
            name
            email
        }
    }
`
const validationSchema = Yup.object().shape({
    name: Yup
    .string()
    .required("O nome é necessário")
    .label("Nome"),
    email: Yup
    .string()
    .required("O e-mail é necessário")
    .email("O e-email é inválido")
    .label("Email"),
    password: Yup
    .string()
    .required("A senha é necessário")
    .min(6, "A senha é muito pequena")
    .max(15, "A senha é muito grande"),
})

export default function SignUp() {
    const [signupUser, { loading }] = useMutation(SIGNUP_USER)

    const { handleSubmit, register, setValue, errors} = useForm({
        resolver: yupResolver(validationSchema)
    })

    useEffect(() => {
        register('name')
        register('email')
        register('password')
    }, [register])

    function onSubmit({name, email, password}) {
        console.log(name)
        signupUser({
            variables: {
                name: name,
                email: email,
                password: password
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
        <KeyboardAvoidingView style={ styles.main }>

            { loading && <Loading /> }

            <TextField
            placeholder="Nome"
            autoCorrect={false}
            error={errors?.name}
            onChangeText={value => setValue('name', value)}
            />

            <TextField
            placeholder="Email"
            autoCorrect={false}
            error={errors?.email}
            onChangeText={value => setValue('email', value)}
            />

            <TextField
            secureTextEntry
            placeholder="Senha"
            autoCorrect={false}
            error={errors?.password}
            onChangeText={value => setValue('password', value)}
            />

            <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.submitText}>Cadastrar</Text>
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