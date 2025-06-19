import {View, StyleSheet, TextInput} from "react-native";
import {verticalScale} from "@/utils/styling";
import {colors, radius, spacingX} from "@/constants/theme";
import {InputProps} from "@/types";

export default function Input(props: InputProps) {
    return (
        <View
            style={[styles.container, props.containerStyle && props.containerStyle]}
        >
            {props.icon && props.icon}
            <TextInput
                style={[styles.input, props.style && props.style]}
                placeholderTextColor={colors.neutral400}
                ref={props.inputRef && props.inputRef} {...props}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: verticalScale(52),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.neutral600,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._15,
        gap: spacingX._10,
    },
    input: {
        flex: 1,
        fontSize: verticalScale(14),
        color: colors.white,
    },
});