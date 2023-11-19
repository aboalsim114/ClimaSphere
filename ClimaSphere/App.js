import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";


const Stack = createNativeStackNavigator();


export default function App() {


  const RouteOptions = {

    headerTitle: '',
    headerTintColor: '#fff',
    headerTransparent: true,
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomePage'>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={RouteOptions} />
        <Stack.Screen name="Login" component={Login} options={RouteOptions} />
        <Stack.Screen name="Signup" component={Signup} options={RouteOptions} />
      </Stack.Navigator>

      <StatusBar style="auto" />



    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
