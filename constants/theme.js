import { Dimensions } from "react-native";
const { height, width} = Dimensions.get('window');


const COLORS = {
    primary: "#2A4D50",
    secondary: "#DDF0FF",
    tertiary: "#FF7754",


    gray: "#83829A",
    gray2: "#FFFFFF",
    black: "#000000",
    red: "e81e4d",
    green: "#00C135",
    lightwhite: "#FAFAFC"
}

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
}

const SHADOWS = {
    small: {
        shadowsColor: "#000",
        shadowOffset: {
            widt: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
            shadowsColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5.84,
            elevation: 5,
    }
}

export { COLORS, SIZES, SHADOWS};