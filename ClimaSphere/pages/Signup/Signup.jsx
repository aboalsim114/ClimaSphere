import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { styles } from './SignupStyle';
import Checkbox from 'expo-checkbox';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Notifications from 'expo-notifications';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        registerForPushNotificationsAsync();
    }, []);

    const registerForPushNotificationsAsync = async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission for notifications was denied');
        }
    };

    const RegisterUser = async () => {
        if (!email || !password || !agree) {
            setError('Please fill all fields and agree to the terms.');
            return;
        }

        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Compte créé",
                    body: "Votre compte a été créé avec succès!",
                },
                trigger: null,
            });
            Alert.alert('User Created Successfully');
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Signup.png')} style={styles.backgroundImage} />
            <Text style={styles.header}>Sign Up</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />

            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={agree}
                    onValueChange={setAgree}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <TouchableOpacity onPress={RegisterUser} style={styles.button} disabled={!agree}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            )}
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
}
