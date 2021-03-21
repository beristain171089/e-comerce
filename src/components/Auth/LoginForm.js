import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { formStyle } from '../../styles';

export default function LoginForm(props) {

    const { changeForm } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema())
    });

    return (
        <View>
            <TextInput
                label='Email o Username'
                style={formStyle.input}
            />
            <TextInput
                label='Contraseña'
                style={formStyle.input}
            />
            <Button
                mode='contained'
                style={formStyle.btnSucess}
            >
                Entrar
            </Button>
            <Button
                mode='text'
                style={formStyle.btnText}
                onPress={changeForm}
            >
                Registrarse
            </Button>
        </View>
    )
}

function initialValues() {
    return {
        identifier: '',
        password: ''
    }
}

function validationSchema() {
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required()
    }
}