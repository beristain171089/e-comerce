import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';
import { getBannersApi } from '../../api/home-banner';
import { API_URL } from '../../utils/constants';

const { width } = Dimensions.get('window');
const height = 150;

export default function Banner() {

    const navigation = useNavigation();

    const [banners, setBanners] = useState(null);
    const [bannerActive, setBannerActive] = useState(0);

    useEffect(() => {

        (async () => {

            const response = await getBannersApi();
            setBanners(response);

        })();

    }, []);

    const goToProduct = (id) => {
        navigation.push('product', { idProduct: id })
    };

    if (!banners) return null;

    const rederItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => goToProduct(item.product._id)} >
                <Image
                    style={styles.carousel}
                    source={{ uri: `${API_URL}${item.banner.url}` }}
                />
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                layout='default'
                data={banners}
                sliderWidth={width}
                itemWidth={width}
                renderItem={rederItem}
                onSnapToItem={(index) => setBannerActive(index)}
            />
            <Pagination
                dotsLength={size(banners)}
                activeDotIndex={bannerActive}
                inactiveDotOpacity={0.6}
                inactiveDotScale={0.6}
                containerStyle={styles.dotsContainer}
                dotStyle={styles.dot}
                inactiveDotStyle={styles.dot}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    carousel: {
        width: width,
        height: height
    },
    dotsContainer: {
        position: 'absolute',
        bottom: -20,
        width: '100%'
    },
    dot: {
        backgroundColor: '#fff'
    }
});
