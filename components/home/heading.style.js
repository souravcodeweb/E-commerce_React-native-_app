import { COLORS, SIZES} from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        marginTop: SIZES.medium,
        marginBottom: SIZES.xSmall,
        marginHorizontal: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle : {
        fontSize: SIZES.xLarge -4
    }
});

export default styles