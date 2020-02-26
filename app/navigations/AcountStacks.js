import { createStackNavigator } from 'react-navigation-stack';
import MyAccountScreen from '../screens/Account/MyAccount';
import LoginScreen from '../screens/Account/Login';
import RegisterScreen from '../screens/Account/Register';

const AccountScreenStacks = createStackNavigator({
    Account: {
        screen: MyAccountScreen,
        navigationOptions: () => ({
            title: "Mi Cuenta"
        })
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: "Login"
        })
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: () => ({
            title: "Registro"
        })
    }
});

export default AccountScreenStacks;