import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import { getAuth, signOut } from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export default function Profile() {
    const { colors } = useTheme();
    const auth = getAuth();
    const firestore = getFirestore();
    const user = auth.currentUser;
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (user) {
            setEmail(user.email);
        } else {
            // pass
        }
    }, [user]);

    const handleSave = async () => {
        try {
            const userDoc = doc(firestore, "users", user.uid);
            await updateDoc(userDoc, {
                email: email
            });
            Alert.alert("Profil mis à jour", "Votre profil a été mis à jour avec succès.");
        } catch (error) {
            Alert.alert("Erreur de mise à jour", error.message);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            // Ajouter la logique de redirection après la déconnexion
        } catch (error) {
            Alert.alert("Erreur de déconnexion", error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.profileContainer}>
                    <TextInput
                        label="Mail"
                        mode="outlined"
                        style={styles.input}
                        keyboardType="email-address"
                        theme={{ colors: { primary: colors.primary, text: colors.primary } }}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        editable={true}
                    />
                    <Button
                        mode="contained"
                        onPress={handleSave}
                        style={styles.button}
                    >
                        Sauvegarder les modifications
                    </Button>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    profileContainer: {
        padding: 10,
        alignItems: 'center',
    },
    input: {
        width: '90%',
        backgroundColor: 'transparent',
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
        width: '90%',
    },
});
