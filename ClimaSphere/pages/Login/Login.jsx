import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginStyle";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const validateEmail = () => {
        if (email.length === 0 || !email.includes('@')) {
            setEmailError("Email invalide");
        } else {
            setEmailError("");
        }
    };


    const validatePassword = () => {
        if (password.length === 0) {
            setPasswordError("Password invalide");
        } else {
            setPasswordError("");
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
                    onChangeText={(text) => setEmail(text)}
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
                    onChangeText={(text) => setPassword(text)}
                    onEndEditing={validatePassword}
                    value={password}
                />
                {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Connexion</Text>
            </TouchableOpacity>
        </View>
    );
}