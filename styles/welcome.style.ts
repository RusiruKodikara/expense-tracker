import {StyleSheet} from "react-native";
import {colors, spacingX, spacingY} from "@/constants/theme";
import {verticalScale} from "@/utils/styling";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: spacingY._7,
    },
    welcomeImage: {
        width: '100%',
        height: verticalScale(300),
        alignSelf: 'center',
        marginTop: verticalScale(100),
    },
    loginButton: {
        alignSelf: 'flex-end',
        marginRight: spacingX._20,
    },
    footer: {
        backgroundColor: colors.neutral900,
        alignItems: 'center',
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(45),
        gap: spacingY._20,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: -10 },
        elevation: 10,
        shadowRadius: 25,
        shadowOpacity: 0.15,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: spacingX._20,
        marginTop: verticalScale(10),
    }
});