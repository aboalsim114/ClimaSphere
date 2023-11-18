import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
const HomeStack = createStackNavigator(
    {
        WelcomePage: {
            screen: WelcomePage,
            navigationOptions: {
                headerTitle: '',
                headerTintColor: '#fff',
                headerTransparent: true,
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                headerTitle: '',
                headerTintColor: '#fff',
                headerTransparent: true,
            }
        },
        Signup: {
            screen: Signup,
            navigationOptions: {
                headerTitle: '',
                headerTintColor: '#fff',
                headerTransparent: true,
            }
        },

    },
    {
        initialRouteName: 'WelcomePage',
    }
);

export default createAppContainer(HomeStack);
