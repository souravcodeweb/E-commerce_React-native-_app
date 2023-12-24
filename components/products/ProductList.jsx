import { Text, FlatList, View} from 'react-native';
import React from 'react';
import { SIZES } from '../../constants/theme';
// import styles from './productList.style';

const ProductList = () => {
    const products = [1, 2, 3, 4]

  return (
   <View style={{marginTop: SIZES.medium}}>
     <FlatList 
        data={products}
        renderItem={({item}) => (<Text>Products</Text>)}
        horizontal
        contentContainerStyle={{columnGap: SIZES.medium}}
    />
   </View>
  )
}

export default ProductList

