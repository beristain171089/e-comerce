import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAuth from '../../hooks/useAuth';
import { addAddressesApi } from '../../api/address';
import { formStyle } from '../../styles';

export default function AddAddress() {

    const { auth } = useAuth();
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {

            setLoading(true);

            try {

                await addAddressesApi(auth, formData);
                navigation.goBack();

            } catch (error) {
                console.log(error);
            };

            setLoading(false);
        }
    });

    return (
        <KeyboardAwareScrollView extraScrollHeight={25}>
            <View style={styles.container}>
                <Text style={styles.title}>Nueva dirección</Text>
                <TextInput
                    label='Titulo'
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue('title', text)}
                    value={formik.values.title}
                    error={formik.errors.title}
                />
                <TextInput
                    label='Nombre y apellidos'
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue('name_lastname', text)}
                    value={formik.values.name_lastname}
                    error={formik.errors.name_lastname}
                />
                <TextInput
                    label='Dirección'
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue('address', text)}
                    value={formik.values.address}
                    error={formik.errors.address}
                />
                <TextInput
                    label='Código postal'
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue('postal_code', text)}
                    value={formik.values.postal_code}
                    error={formik.errors.postal_code}
                />
                <TextInput
                    label='Ciudad'
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue('city', text)}
                    value={formik.values.city}
                    error={formik.errors.city}
                />
                <TextInput
                    label='Estado'
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue('state', text)}
                    value={formik.values.state}
                    error={formik.errors.state}
                />
                <TextInput
                    label='País'
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue('country', text)}
                    value={formik.values.country}
                    error={formik.errors.country}
                />
                <TextInput
                    label='Télefono'
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue('phone', text)}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                />
                <Button
                    mode='contained'
                    style={[formStyle.btnSucess, styles.btnSucess]}
                    onPress={formik.handleSubmit}
                    loading={loading}
                >
                    Crear dirección
                </Button>
            </View>
        </KeyboardAwareScrollView>
    );
};

function initialValues() {
    return {
        title: '',
        name_lastname: '',
        address: '',
        postal_code: '',
        city: '',
        state: '',
        country: '',
        phone: ''
    }
};

function validationSchema() {
    return {
        title: Yup.string().required(),
        name_lastname: Yup.string().required(),
        address: Yup.string().required(),
        postal_code: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        country: Yup.string().required(),
        phone: Yup.string().required()
    }
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        paddingVertical: 20
    },
    btnSucess: {
        marginBottom: 20
    }
});
