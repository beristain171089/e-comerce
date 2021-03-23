import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-root-toast';
import { registerApi } from '../../api/user';
import { formStyle } from '../../styles';

export default function RegisterForm(props) {

    const { changeForm } = props;

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {

            setLoading(true);

            try {

                await registerApi(formData);
                changeForm();
                
            } catch (error) {
                setLoading(false);
                Toast.show("Error al registrar el usuario", {
                    position: Toast.positions.CENTER
                })
            }
        }
    });

    return (
        <>
            <TextInput
                style={formStyle.input}
                label='Email'
                onChangeText={(text) => formik.setFieldValue('email', text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <TextInput
                style={formStyle.input}
                label='Nombre de usuario'
                onChangeText={(text) => formik.setFieldValue('username', text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <TextInput
                style={formStyle.input}
                label='Contraseña'
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('password', text)}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <TextInput
                style={formStyle.input}
                label='Repetir Contraseña'
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            />
            <Button
                style={formStyle.btnSucess}
                mode='contained'
                onPress={formik.handleSubmit}
                loading={loading}
            >
                Registrarse
            </Button>
            <Button
                style={formStyle.btnText}
                labelStyle={formStyle.btnTextLabel}
                mode='text'
                onPress={changeForm}
            >
                Iniciar sesión
            </Button>
        </>
    )
}

function initialValues() {
    return {
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
    }
}

function validationSchema() {
    return {
        email: Yup.string().email(true).required(true),
        username: Yup.string().required(true),
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true)
    }
}