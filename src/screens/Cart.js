import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { size } from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StatusBar from '../components/StatusBar';
import NotProducts from '../components/Cart/NotProducts';
import ProductList from '../components/Cart/ProductList';
import { getProductCartApi } from '../api/cart';
import colors from '../styles/colors';

export default function Cart() {

    const [cart, setCart] = useState(null);
    const [products, setProducts] = useState(null);
    const [reloadCart, setReloadCart] = useState(false);

    useFocusEffect(

        useCallback(() => {

            setCart(null);
            loadCart();

        }, [])

    );

    useEffect(() => {

        if (reloadCart) {
            loadCart();
            setReloadCart(false);
        }

    }, [reloadCart]);

    const loadCart = async () => {

        const response = await getProductCartApi();
        setCart(response);
    };

    return (
        <>
            <StatusBar backgroundColor={colors.bgDark} barStyle='light-content' />
            {!cart && size(cart) === 0 ?
                <NotProducts />
                :
                <KeyboardAwareScrollView extraScrollHeight={25}>
                    <ScrollView style={styles.cartContainer}>
                        <ProductList
                            cart={cart}
                            products={products}
                            setProducts={setProducts}
                            setReloadCart={setReloadCart}
                        />
                    </ScrollView>
                </KeyboardAwareScrollView>
            }
        </>
    );
};

const styles = StyleSheet.create({
    cartContainer: {
        padding: 10
    },
});
