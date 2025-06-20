import {TouchableOpacity, StyleSheet, ViewStyle, View} from "react-native";
import {colors, radius} from "@/constants/theme";
import {verticalScale} from "@/utils/styling";
import React from "react";
import {CustomButtonProps} from "@/types";
import {Loading} from "@/compnents/Loading";

export const Button = ({style, onPress, loading = false, children,}: CustomButtonProps) => {
    if (loading) {
        return (
            <View style={[styles.button, style, {backgroundColor: 'transparent'}]}>
                <Loading/>
            </View>
        );
    }
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        height: verticalScale(52),
        justifyContent: 'center',
        alignItems: 'center',
    }
});