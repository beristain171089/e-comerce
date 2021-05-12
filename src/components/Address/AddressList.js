import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { map } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { deleteAddressApi } from '../../api/address'
import colors from '../../styles/colors';

export default function AddressList(props) {

    const { addresses, setReloadAddresses } = props;

    const { auth } = useAuth();
    const navigation = useNavigation();

    const deleteAddressAlert = (address) => {
        Alert.alert(
            'Eliminar dirección',
            `¿Estas seguro de eliminar la dirección? ${address.title}`,
            [
                {
                    text: 'NO'
                },
                {
                    text: 'SI',
                    onPress: () => deleteAddres(address._id)
                }
            ],
            { cancelable: false }
        )
    };

    const deleteAddres = async (idAddress) => {

        try {

            await deleteAddressApi(auth, idAddress);
            setReloadAddresses(true);

        } catch (error) {
            console.log(error);
        };

    };

    const goToUpdateAddress = (idAddress) => {
        navigation.navigate('add-address', { idAddress });
    };

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
                            onPress={() => goToUpdateAddress(address._id)}
                        >
                            Editar
                        </Button>
                        <Button
                            mode='contained'
                            color={colors.primary}
                            onPress={() => deleteAddressAlert(address)}
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
