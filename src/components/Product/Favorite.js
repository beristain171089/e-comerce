import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper'

export default function Favorite(props) {

    const { product } = props;

    const addFavorite = () => {

    };

    return (
        <View style={{ zIndex: 1 }}>
            <Button
                mode='contained'
                contentStyle={styles.btnAddFavoriteContent}
                labelStyle={styles.btnLabel}
                style={styles.btn}
                onPress={addFavorite}
            >
                Añadir a favoritos
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    btnAddFavoriteContent: {
        backgroundColor: '#057B00',
        paddingVertical: 5
    },
    btnLabel: {
        fontSize: 18
    },
    btn: {
        marginTop: 20
    }
});
