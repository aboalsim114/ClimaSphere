import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut as firebaseSignOut } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignOut = () => {
    const navigation = useNavigation();
    const auth = getAuth();

    useEffect(() => {
        const signOut = async () => {
            try {
                await firebaseSignOut(auth); // Déconnexion de Firebase
                await AsyncStorage.removeItem('@auth_token'); // Suppression du token
                navigation.navigate('WelcomePage'); // Redirection vers l'écran de bienvenue
            } catch (error) {
                console.error('Erreur de déconnexion:', error);
            }
        };

        signOut();
    }, [navigation, auth]);

    return null;
};

export default SignOut;
