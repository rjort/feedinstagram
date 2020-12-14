import React, { useState, useEffect, useContext } from 'react'
import { 
    View,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    Animated,
    Keyboard,
    Alert
} from 'react-native'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Logo from '../../components/Logo'
import Loading from '../../components/Loading'
import TextField from '../../components/TextField'
import ApolloAuthContext from '../../contexts/apolloAuth'

const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            auth_token {
                token_type
                access_token
                expires_at
            }
            user {
                id
                name
                email
                image
            }
        }
    }
`

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('O e-mail é necessário')
        .email('O e-email é inválido'),
    password: Yup.string()
        .required('A senha é necessária')
        .min(6, 'A senha é muito curta')
})

export default function Login({ navigation }) {
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}))
    const [opacity] = useState(new Animated.Value(0))
    const [marginTop, setMarginTop] = useState(35)
    const [logoVisible, setLogoVisible] = useState(true)

    const { login } = useContext(ApolloAuthContext)
    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        errorPolicy: 'all'
    })

    const { handleSubmit, register, setValue, errors } = useForm({
        resolver: yupResolver(validationSchema)
    })

    useEffect(() => {
        const abortController = new AbortController()

        register('email')
        register('password')

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true
            })
        ]).start()

        return function cleanup() {
            abortController.abort()
        }
    }, [register, offset, opacity])

    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    function keyboardDidShow() {
        navigation.setOptions({ 
            headerTitle: props => <Logo {...props} />,
            headerTitleAlign: 'center',
            headerTransparent: false
        })
        setLogoVisible(false)
        setMarginTop(5)
    }

    function keyboardDidHide() {
        navigation.setOptions({ 
            headerTitle: '',
            headerTransparent: true
        })
        setLogoVisible(true)
        setMarginTop(35)
    }

    function onSubmit({email, password}) {
        loginUser({
            variables: { 
                email: email, 
                password: password
            } 
        }).then(response => {
            if (response.errors) {
                Alert.alert('Error', response.errors[0].message)
            }

            if (response.data) {
                login(
                    response.data.login.user,
                    response.data.login.auth_token.access_token
                )
            }
        })
    }

    return (
        <KeyboardAvoidingView style={styles.main}>
            { logoVisible &&
                <View style={styles.containerLogo} >
                    <Logo/>
                </View>
            }

            { loading && <Loading /> }

            <Animated.View 
            style={[
                styles.container,
                {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
            ]}
            >
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
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{marginTop: marginTop}}
                onPress={() => navigation.navigate('ResetPassword')}
                >
                    <Text style={styles.textBlack}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <Text style={{marginTop: marginTop}}>Não tem uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.textBlue}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animated.View>
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