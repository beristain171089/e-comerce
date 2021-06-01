import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { size } from 'lodash';
import { searchProductApi } from '../../api/search';

export default function Search(props) {

    const { route } = props;
    const { params } = route;

    const [products, setProducts] = useState(null);

    useEffect(() => {

        (async () => {

            setProducts(null);
            const response = await searchProductApi(params.search);
            console.log(response);

        })();

    }, [params.search]);

    return (
        <View>
            <Text>Search...</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});
