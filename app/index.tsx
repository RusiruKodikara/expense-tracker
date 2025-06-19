import {Text, View} from "react-native";
import {styles} from "@/styles/index.style";
import {Image} from "expo-image";
import {useRouter} from "expo-router";
import {useEffect} from "react";

export default function Index() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/(auth)/welcome')
        },2000);
    }, []);
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode={'contain'}
                source={require('../assets/images/splashImage.png')}/>
        </View>
    );
}
