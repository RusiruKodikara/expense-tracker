import {ActivityIndicator, ActivityIndicatorProps, Text, View} from "react-native";
import {colors} from "@/constants/theme";

export const Loading = ({size = 'large', color = colors.primary}: ActivityIndicatorProps) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={size} color={color}>Loading</ActivityIndicator>
        </View>
    );
}