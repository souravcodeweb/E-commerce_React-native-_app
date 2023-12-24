import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from '../../constants/theme';

const Carousel = () => {
  const slides = [
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  }
});
