import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './SignupStyle';
import Checkbox from 'expo-checkbox';

export default function Signup() {
    const [agree, setAgree] = useState(false);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Signup.png')} style={styles.backgroundImage} />
            <Text style={styles.header}>Ravi de vous voir!</Text>
            <Text style={styles.subHeader}>Créez votre compte</Text>

            <TextInput style={styles.input} placeholder="Entrez votre nom d'utilisateur" placeholderTextColor="#ffffff" />
            <TextInput style={styles.input} placeholder="Entrez votre adresse email" keyboardType="email-address" placeholderTextColor="#ffffff" />
            <TextInput style={styles.input} placeholder="Tapez votre mot de passe" secureTextEntry placeholderTextColor="#ffffff" />

            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>J'accepte les termes et conditions</Text>
            </View>

            <TouchableOpacity style={styles.button} disabled={!agree}>
                <Text style={styles.buttonText}>Crée mon compte</Text>
            </TouchableOpacity>
        </View>
    )
}
