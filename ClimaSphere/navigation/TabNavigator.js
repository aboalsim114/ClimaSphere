import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getAuth, signOut } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '../pages/Profile/Profile';
import MeteoHome from '../pages/Meteo/MeteoHome';
import SearchMeteo from '../pages/SearchMeteo/SearchMeteo';
const Tab = createBottomTabNavigator();

export default function TabNavigator({ setIsAuthenticated }) {
    const handleSignOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            await AsyncStorage.removeItem('@auth_token');
            setIsAuthenticated(false); // Mise à jour de l'état d'authentification pour déclencher le rendu du StackNavigator
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (



        <Tab.Navigator>
            <Tab.Screen
                name="MeteoHome"
                component={MeteoHome}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cloud" color={color} size={size} />
                    ),
                    title: '',
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="SearchMeteo"
                component={SearchMeteo}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                    title: '',
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="SignOut"
                component={() => null}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault(); // Empêcher la navigation vers un écran de déconnexion
                        handleSignOut();
                    },
                }}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="log-out" color={color} size={size} />
                    ),
                }}
            />



        </Tab.Navigator>
    );
}
