import { createStackNavigator } from 'react-navigation-stack';
import MyAccountScreen from '../screens/MyAccount';

const AccountScreenStacks = createStackNavigator({
    Account: {
        screen: MyAccountScreen,
        navigationOptions: () => ({
            title: "Mi Cuenta"
        })
    }
});

export default AccountScreenStacks;