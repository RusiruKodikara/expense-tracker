import {StyleSheet} from "react-native";
import {colors} from "@/constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.neutral900,
    },
    logo:{
        height: '20%',
        aspectRatio: 1,
    }
});