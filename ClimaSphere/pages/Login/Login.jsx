import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { styles } from "./LoginStyle";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const auth = getAuth();
    const navigation = useNavigation();

    const LoginUser = async () => {
        if (!validateEmail() || !validatePassword()) return;
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in", userCredential); // Pour le debugging
            const token = await userCredential.user.getIdToken();
            await AsyncStorage.setItem('@auth_token', token); // Stockage du token
            setIsAuthenticated(true);
            navigation.navigate('Profile'); // Correct navigation
            setLoading(false);
        } catch (error) {
            console.error("Login error", error); // Pour le debugging
            setLoading(false);
            handleLoginError(error);
        }
    };

    const handleLoginError = (error) => {
        console.error("Login error handler", error); // Pour le debugging
        if (error.code === 'auth/user-not-found') {
            setEmailError('Aucun utilisateur trouvé avec cet email.');
        } else if (error.code === 'auth/wrong-password') {
            setPasswordError('Mot de passe incorrect.');
        } else {
            Alert.alert('Erreur de connexion', error.message);
        }
    };

    const validateEmail = () => {
        if (email.length === 0 || !email.includes('@')) {
            setEmailError("Email invalide");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    };

    const validatePassword = () => {
        if (password.length === 0) {
            setPasswordError("Password invalide");
            return false;
        } else {
            setPasswordError("");
            return true;
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Login.png')} style={styles.backgroundImage} />
            <Text style={styles.header}>Connexion</Text>
            <Text style={styles.subHeader}>Connectez-vous à votre compte</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="#ffffff"
                    onChangeText={setEmail}
                    onEndEditing={validateEmail}
                    value={email}
                />
                {!!emailError && <Text style={styles.error}>{emailError}</Text>}
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="#ffffff"
                    onChangeText={setPassword}
                    onEndEditing={validatePassword}
                    value={password}
                />
                {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <TouchableOpacity onPress={LoginUser} style={styles.button} disabled={loading}>
                    <Text style={styles.buttonText}>Connexion</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
