import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import StatusBar from '../../components/StatusBar';

export default function Orders() {
    return (
        <>
            <StatusBar />
            <ScrollView>
                <Text>Estamos en mis pedidos</Text>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});
