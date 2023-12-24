import { View, Text, TouchableOpacity, Image} from "react-native";
import React from "react";
import styles from "./productsCard.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import {  useNavigation } from "@react-navigation/native";

const ProductsCard = () => {

    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductsDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{uri: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"}} style={styles.image}/>
        </View>
        <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>Product</Text>
        <Text style={styles.supplier}>This is a very good product.</Text>
        <Text style={styles.price}>$300</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-circle"  size={24} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsCard;
