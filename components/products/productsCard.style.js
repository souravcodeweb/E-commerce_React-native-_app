import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
    },
    imageContainer : {
        flex: 1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: 'hidden',
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        padding: SIZES.small
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZES.large,
        marginBottom: 2
    },
    supplier: {
        fontSize: SIZES.small,
        marginBottom: 2,
        color: COLORS.gray
    },
    price : {
        fontSize: SIZES.medium,
        fontWeight: 'bold'
    },
    addBtn: {
        position: 'absolute',
        bottom: SIZES.xSmall,
        right: SIZES.xSmall
    }
});

export default styles;
