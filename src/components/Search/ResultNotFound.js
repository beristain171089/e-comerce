import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultNotFound(props) {

    const { search } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.searchText}>No hay resultado para {search}</Text>
            <Text style={styles.otherText}>Revisa la ortogrfía o usa teminos mas generales.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    searchText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    otherText: {
        fontSize: 14,
        paddingTop: 5
    }
});
