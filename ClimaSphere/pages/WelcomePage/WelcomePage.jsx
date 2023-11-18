import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./WelcomePageStyle";

export default function WelcomePage({ navigation }) {
    const handlePressConnexion = () => {
        navigation.navigate('Login');
    };

    const handlePressCreateAccount = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Launch-screen.png')} style={styles.backgroundImage} />
            <Text style={styles.title}>ClimatSphere</Text>

            <TouchableOpacity style={styles.ButtonPrimary} onPress={handlePressConnexion}>
                <Text style={styles.buttonText}>Connexion</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonLight} onPress={handlePressCreateAccount}>
                <Text style={styles.buttonText}>Crée mon compte</Text>
            </TouchableOpacity>
        </View>
    );
}
