import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";

const Stack = createNativeStackNavigator();

export default function StackNavigator({ setIsAuthenticated }) {
    return (
        <Stack.Navigator initialRouteName='WelcomePage'>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="Login">
                {props => <Login {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Signup">
                {props => <Signup {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}
