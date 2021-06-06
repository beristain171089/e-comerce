import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { size } from 'lodash';
import StatusBar from '../components/StatusBar';
import Search from '../components/Search';
import ScreenLoading from '../components/ScreenLoading';
import FavoritesList from '../components/Favorites/FavoritesList';
import useAuth from '../hooks/useAuth';
import { getFavoriteApi } from '../api/favorite';
import colors from '../styles/colors';

export default function Favorites() {

    const { auth } = useAuth();

    const [products, setProducts] = useState(null);
    const [reloadFavorites, setReloadFavorites] = useState(false);

    useFocusEffect(

        useCallback(() => {

            setProducts(null);

            (async () => {

                const response = await getFavoriteApi(auth);
                setProducts(response);

            })();

            setReloadFavorites(false);

        }, [reloadFavorites])
    );

    return (
        <>
            <StatusBar backgroundColor={colors.bgDark} barStyle='light-content' />
            <Search />
            {!products ?
                <ScreenLoading text='Cargando favoritos' />
                :
                size(products) === 0 ?
                    <View style={styles.container}>
                        <Text style={styles.title}>Lista de favoritos</Text>
                        <Text>No tienes productos en tu lista</Text>
                    </View>
                    :
                    <FavoritesList
                        products={products}
                        setReloadFavorites={setReloadFavorites}
                    />
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 5
    }
});
