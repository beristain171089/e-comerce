import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Buy(props) {

    const { product, quantity } = props;

    const addProductCart = () => {

    };

    return (
        <View style={{ zIndex: 1 }}>
            <Button
                contentStyle={styles.btnBuyContent}
                labelStyle={styles.labelStyle}
                style={styles.btn}
                mode='contained'
                onPress={addProductCart}
            >
                Añadir al carrito
        </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    btnBuyContent: {
        backgroundColor: '#008fe9',
        paddingVertical: 5
    },
    labelStyle: {
        fontSize: 18
    },
    btn: {
        marginTop: 20
    }
});
