import React, { useEffect, useState } from 'react';
import { View } from 'react-native'; // Importez View pour un écran vide
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthenticatedTabNavigator({ setIsAuthenticated }) {
  const handleSignOut = async () => {
    await AsyncStorage.removeItem('@auth_token');
    setIsAuthenticated(false);
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'SignOut') {
            iconName = 'ios-exit';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="SignOut"
        component={View} // Un écran vide
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            handleSignOut();
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('@auth_token');
      setIsAuthenticated(!!token);
    };

    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomePage'>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <Stack.Screen name="Authenticated">
            {() => <AuthenticatedTabNavigator setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
