import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./WelcomeStyles";
import { COLORS, SIZES } from "../../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Wellcome = () => {
const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black)}>Find The Most</Text>
        <Text style={styles.welcomeText(COLORS.primary)}>
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() =>navigation.navigate("Search")}
            placeholder="What are you looking gor"
          />
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.gray2} /> 
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
};

export default Wellcome;
