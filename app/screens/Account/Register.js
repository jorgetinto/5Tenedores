import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../components/Acoount/RegisterForm';

export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <Image
                style={styles.logo}
                source={require(".././../../assets/img/5-tenedores-letras-icono-logo.png")}
                resizeMode="contain"
            />

            <View style={styles.viewForm}>
                <RegisterForm />
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewForm: {
        marginRight: 40,
        marginLeft: 40
    }
})