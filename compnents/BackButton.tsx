import {useRouter} from "expo-router";
import {TouchableOpacity, StyleSheet} from "react-native";
import {BackButtonProps} from "@/types";
import {colors, radius} from "@/constants/theme";
import {CaretLeft} from "phosphor-react-native";
import {verticalScale} from "@/utils/styling";

export default function BackButton({style, iconSize = 26}: BackButtonProps) {
    const route = useRouter();
    return (
        <TouchableOpacity
            onPress={() => route.back()}
            style={[styles.button, style]}>
            <CaretLeft
                size={verticalScale(iconSize)}
                color={colors.white}
                weight={'bold'}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.neutral600,
        alignSelf: 'flex-start',
        borderRadius: radius._12,
        borderCurve: 'continuous',
        padding: 5,
    },
});