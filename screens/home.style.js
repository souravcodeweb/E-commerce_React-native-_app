import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        fontWeight:'bold',
    },
    appBarWrapper: {
        marginHorizontal: 10,
        marginTop: SIZES.small,
        // backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardCount: {
        position: 'absolute',
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999
    },
    cardNumber: {
        fontWeight: '600',
        fontSize: 10,
        color: COLORS.lightwhite
    }
});


export default styles;