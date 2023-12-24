import { StyleSheet, TouchableOpacity, View, TextInput} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from '../constants/theme';
// import styles from './home.style';

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
        <Ionicons name="camera-outline" style={styles.searchIcon} size={SIZES.xLarge} /> 
          
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking gor"
          />
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn}>
        <Feather name="search" size={24} color={COLORS.gray2} />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginHorizontal: SIZES.small,
    height:  50,
    marginTop: 12,
    borderRadius: 8
},
searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
},
searchWrapper : {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
},
searchBtn : {
    width: 50,
    backgroundColor: COLORS.primary,
    height: '100%',
    borderRadius: SIZES.medium,
    alignItems: 'center',
    justifyContent: 'center',
}
})