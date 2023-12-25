import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { getAuth, signOut } from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { styles } from "./PorofileStyle";
export default function Profile() {
    const { colors } = useTheme();
    const auth = getAuth();
    const firestore = getFirestore();
    const user = auth.currentUser;
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setEmail(user.email);
        } else {
            // Handle when user is not signed in
        }
    }, [user]);

    const handleSave = async () => {
        if (!email) {
            Alert.alert("Validation Error", "Please enter an email address.");
            return;
        }

        setIsLoading(true);

        try {
            const userDoc = doc(firestore, "users", user.uid);
            await updateDoc(userDoc, {
                email: email
            });
            Alert.alert("Profile Updated", "Your profile has been updated successfully.");
        } catch (error) {
            Alert.alert("Update Error", error.message);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.profileContainer}>
                    <Text style={styles.heading}>Edit Profile</Text>
                    <TextInput
                        label="Email"
                        mode="outlined"
                        style={styles.input}
                        keyboardType="email-address"
                        theme={{ colors: { primary: colors.primary, text: colors.primary } }}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        editable={!isLoading}
                    />
                    <Button
                        mode="contained"
                        onPress={handleSave}
                        style={styles.button}
                        loading={isLoading}
                        disabled={isLoading}
                    >
                        Save Changes
                    </Button>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

