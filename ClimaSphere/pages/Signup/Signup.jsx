import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './SignupStyle';
import Checkbox from 'expo-checkbox';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const validateUsername = () => {
        if (username.length === 0) {
            setUsernameError("Le nom d'utilisateur ne peut pas être vide.");
        } else {
            setUsernameError('');
        }
    };

    const validateEmail = () => {

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError('Adresse email invalide.');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        if (password.length < 6) {
            setPasswordError('Le mot de passe doit contenir au moins 6 caractères.');
        } else {
            setPasswordError('');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Signup.png')} style={styles.backgroundImage} />
            <Text style={styles.header}>Ravi de vous voir!</Text>
            <Text style={styles.subHeader}>Créez votre compte</Text>

            <TextInput
                style={styles.input}
                placeholder="Entrez votre nom d'utilisateur"
                placeholderTextColor="#ffffff"
                onChangeText={setUsername}
                onEndEditing={validateUsername}
                value={username}
            />
            {!!usernameError && <Text style={styles.error}>{usernameError}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Entrez votre adresse email"
                keyboardType="email-address"
                placeholderTextColor="#ffffff"
                onChangeText={setEmail}
                onEndEditing={validateEmail}
                value={email}
            />
            {!!emailError && <Text style={styles.error}>{emailError}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Tapez votre mot de passe"
                secureTextEntry
                placeholderTextColor="#ffffff"
                onChangeText={setPassword}
                onEndEditing={validatePassword}
                value={password}
            />
            {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}

            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={agree}
                    onValueChange={setAgree}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>J'accepte les termes et conditions</Text>
            </View>

            <TouchableOpacity style={styles.button} disabled={!agree}>
                <Text style={styles.buttonText}>Crée mon compte</Text>
            </TouchableOpacity>
        </View>
    );
}