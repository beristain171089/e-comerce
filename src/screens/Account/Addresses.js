import React, { useCallback } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { getAddressesApi } from '../../api/address';
import useAuth from '../../hooks/useAuth';

export default function Addresses() {

    const { auth } = useAuth();

    useFocusEffect(
        useCallback(() => {

            (async () => {

                const response = await getAddressesApi(auth);
                console.log(response);

            })()

        }, [])
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Mis direcciones</Text>
            <TouchableWithoutFeedback
                onPress={() => console.log('dfas')}
            >
                <View style={styles.addAddress}>
                    <Text style={styles.addAddressText}>Añadir una dirección</Text>
                    <IconButton
                        icon='arrow-right'
                        color='#000'
                        size={19}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 20
    },
    addAddress: {
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addAddressText: {
        fontSize: 16
    }
});
