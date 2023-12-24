import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";


const styles = StyleSheet.create({
    container : {
        width: "100%"
    },
    welcomeText: (color, top) => ( {
        fontSize: SIZES.xxLarge -10,
        fontWeight: 'bold',
        marginTop: top,
        color: color,
        marginHorizontal: 10,
    }),

    searchContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        height:  50,
        marginTop: 12,
        borderRadius: 8,
        marginHorizontal: 10
    },
    searchIcon: {
        marginHorizontal: 8,
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

export default styles