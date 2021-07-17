import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { map } from 'lodash';
import ScreenLoading from '../ScreenLoading';
import colors from '../../styles/colors';

export default function AddressesList(props) {

    const { addresses, selectedAddress, setSelectedAddress } = props;

    useEffect(() => {

        addresses && setSelectedAddress(addresses[0]);

    }, [addresses]);

    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Dirección de envío</Text>
            {!addresses && <ScreenLoading text='Cargando direcciones' />}
            {map(addresses, (address) => (
                <TouchableWithoutFeedback
                    key={address._id}
                    onPress={() => setSelectedAddress(address)}
                >
                    <View
                        style={[
                            styles.address,
                            address._id === selectedAddress?._id && styles.checket
                        ]}
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
                        <Text>Número de teléfono: {address.phone}</Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    containerTitle: {
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    address: {
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 15
    },
    checket: {
        borderColor: colors.primary,
        backgroundColor: '#0098d330'
    },
    title: {
        fontWeight: 'bold',
        paddingBottom: 5
    },
    blockLine: {
        flexDirection: 'row'
    }
});
