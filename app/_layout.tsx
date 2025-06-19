import {Stack} from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView} from "react-native";
import {colors} from "@/constants/theme";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1,backgroundColor: colors.neutral800}}>
                <Stack  screenOptions={{headerShown: false}}/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
