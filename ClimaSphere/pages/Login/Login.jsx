import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginStyle";

export default function Login() {
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
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="#ffffff"
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Connexion</Text>
            </TouchableOpacity>
        </View>
    );
}

