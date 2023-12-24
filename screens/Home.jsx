import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./home.style";
import { Wellcome } from "../components";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductList from "../components/products/ProductList";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.textStyle}>India Kolkata</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cardCount}>
              <Text style={styles.cardNumber}> 8 </Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Wellcome/>
        <Carousel/>
        <Heading/>
        <ProductList/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
