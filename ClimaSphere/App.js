import "./console.js"
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import StackNavigator from './navigation/StackNavigator';
import TabNavigator from './navigation/TabNavigator';


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
      {isAuthenticated ?
        <TabNavigator setIsAuthenticated={setIsAuthenticated} /> :
        <StackNavigator setIsAuthenticated={setIsAuthenticated} />
      }
    </NavigationContainer>
  );
}
