import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { map } from 'lodash';
import colors from '../../styles/colors';

export default function AddressList(props) {

    const { addresses } = props;

    return (
        <View style={styles.container}>
            {map(addresses, (address) => (
                <View
                    key={address._id}
                    style={styles.address}
                >
                    <Text style={styles.title}>{address.title}</Text>
                    <Text>{address.name_lastname}</Text>
                    <Text>{address.address}</Text>
                    <View style={styles.blockLine}>
                        <Text>{address.state}, </Text>
                        <Text>{address.city}, </Text>
                        <Text>{address.postal_code}</Text>
                    </View>
                    <Text>{address.country}</Text>
                    <Text>Número de télefono: {address.phone}</Text>
                    <View style={styles.actions}>
                        <Button
                            mode='contained'
                            color={colors.primary}
                        >
                            Editar
                        </Button>
                        <Button
                             mode='contained'
                             color={colors.primary}
                        >
                            Eliminar
                        </Button>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    address: {
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 15
    },
    title: {
        fontWeight: 'bold',
        paddingBottom: 5
    },
    blockLine: {
        flexDirection: 'row'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    }
});
