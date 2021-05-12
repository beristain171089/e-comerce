import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { map } from 'lodash';
import { API_URL } from '../../utils/constants';

export default function ListProduct(props) {

  const { products } = props;

  return (
    <View style={styles.container}>
      {map(products, (product) => (
        <TouchableWithoutFeedback
          key={product._id}
          onPress={() => console.log(`${API_URL}${product.main_image.url}`)}
        >
          <View style={styles.containerProduct}>
            <View style={styles.product}>
              <Image
                style={styles.image}
                source={{ uri: `${API_URL}${product.main_image.url}` }}
              />
              <Text
                style={styles.name}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {product.title}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: -3
  },
  containerProduct: {
    width: '50%',
    padding: 3
  },
  product: {
    padding: 10,
    backgroundColor: '#F0F0F0'
  },
  image: {
    height: 150,
    resizeMode: 'contain'
  },
  name: {
    marginTop: 15,
    fontSize: 18
  }
});
