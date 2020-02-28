import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { validateEmail } from '../../utils/Validation';
import Loading from '../Loading';
import * as firebase from 'firebase';
import { withNavigation } from 'react-navigation';


function LoginForm(props) {
    const { toastRef, navigation } = props;
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [isVisibleLoading, setIsVisibleLoading] = useState(false);

    const login = async () => {

        setIsVisibleLoading(true);

        if (!email || !password) {
            toastRef.current.show("Todos los campos son obligatorios");
        } else {
            if (!validateEmail(email)) {
                toastRef.current.show("el email no es correcto");
            }
            else {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        navigation.navigate("Account");
                    })
                    .catch(() => {
                        toastRef.current.show("Email o contraseña incorrectos");
                    })
            }
        }

        setIsVisibleLoading(false);
    }

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange={e => setEmail(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                password={true}
                secureTextEntry={hidePassword}
                containerStyle={styles.inputForm}
                onChange={e => setpassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={hidePassword ? "eye-outline" : "eye-off-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                }
            />
            <Button
                title="Iniciar sesión"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={login}
            />
            <Loading text="Iniciando sesión" isVisible={isVisibleLoading} />
        </View>
    )
}

export default withNavigation(LoginForm);


const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    imputForm: {
        width: "100%",
        marginTop: 20
    },
    iconRight: {
        color: "#c1c1c1"
    },
    btnContainerLogin: {
        marginTop: 20,
        width: "95%"
    },
    btnLogin: {
        backgroundColor: "#00a680"
    }
})