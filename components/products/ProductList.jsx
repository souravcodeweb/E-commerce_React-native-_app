import { Text, FlatList, View} from 'react-native';
import React from 'react';
import { SIZES } from '../../constants/theme';
import styles from './productsCard.style';
import ProductsCard from './ProductsCard';

const ProductList = () => {
    const products = [1, 2, 3, 4]

  return (
   <View style={{marginTop: SIZES.medium, marginLeft: 8}}>
     <FlatList 
        data={products}
        renderItem={({item}) => <ProductsCard/>}
        horizontal
        contentContainerStyle={{columnGap: -10}}
    />
   </View>
  )
}

export default ProductList

