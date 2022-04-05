import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import { initializeApp } from 'firebase/app';
import {KeyboardAvoidingView, TouchableOpacity, Image, TextInput, StyleSheet, Text, View } from 'react-native'

const LoginScreen = () => {
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 

    const navigation = useNavigation()

    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Films")
      }
    })

    return unsubscribe
  }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registred with : ',user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged with : ', user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container1}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/popcorn.png')} />
        </View>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={ email }
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={ password }
                        onChangeText={text => setPassword(text) }
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ handleSignUp }
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }, 

    image: {
        marginTop: 10, 
        paddingTop: 90,
        width: '40%',
        height: '60%'
    },

    imageContainer: {
        paddingTop: 10,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: -70
    },

    container1: {
        flex: 2,
        marginTop: '20%',
        backgroundColor: '#cce6f8',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },

    inputContainer: {
        width: '80%',
        marginTop: -120
    }, 

    input: {
        backgroundColor: 'white', 
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10, 
        marginTop: 5
    },  

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 40,
    },

    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15, 
        borderRadius: 10, 
        alignItems: 'center'
    },

    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9', 
        borderWidth: 2,
    },

    buttonOutlineText: {
        color: '#0782F9', 
        fontWeight: '700', 
        fontSize: 16,
    }, 

    buttonText: {
        color: '#fff', 
        fontWeight: '700', 
        fontSize: 16,
    }
})
