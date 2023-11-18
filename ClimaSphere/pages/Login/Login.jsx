import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { styles } from "./LoginStyle";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const auth = getAuth();

    const LoginUser = async () => {
        if (!validateEmail() || !validatePassword()) return;
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("connexion reussi")
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setEmailError('No user found with this email.');
            } else if (error.code === 'auth/wrong-password') {
                setPasswordError('Incorrect password.');
            } else {
                setEmailError('Failed to login. Please try again.');
            }
        } finally {
            setLoading(false);
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
