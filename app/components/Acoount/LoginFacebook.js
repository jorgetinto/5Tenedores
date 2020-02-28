import React, { useState } from 'react';
import { SocialIcon } from 'react-native-elements';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';
import { withNavigation } from 'react-navigation';
import { FacebookApi } from '../../utils/Social';
import Loading from "../Loading";
import { View } from 'react-native';

function LoginFacebook(props) {

    const { toastRef, navigation } = props;
    const [isVisibleLoading, setIsVisibleLoading] = useState(false);

    const Login = async () => {

        try {
            await Facebook.initializeAsync(FacebookApi.aplication_id);

            const { type, token } = await Facebook.logInWithReadPermissionsAsync({
                permissions: FacebookApi.permissions,
            });

            if (type === 'success') {
                setIsVisibleLoading(true);

                const credentials = firebase.auth.FacebookAuthProvider.credential(token);
                await firebase
                    .auth()
                    .signInWithCredential(credentials)
                    .then(() => {
                        navigation.navigate("Account");
                    })
                    .catch(() => {
                        toastRef.current.show("Error accediendo con facebook, intentelo mas tarde");
                    })

            } else {
                toastRef.current.show("inicio de sesión cancelado");
            }
            setIsVisibleLoading(false);
        } catch ({ message }) {
            toastRef.current.show(`Facebook Login Error: ${message}`);
        }

    }

    return (
        <View>

            <SocialIcon
                title="Iniciar sesión con facebook"
                button
                type="facebook"
                onPress={Login}
            />
            <Loading text="Iniciando sesión" isVisible={isVisibleLoading} />
        </View>
    )
}

export default withNavigation(LoginFacebook);