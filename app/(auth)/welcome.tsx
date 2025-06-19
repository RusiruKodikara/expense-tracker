import {Image, TouchableOpacity, View} from "react-native";
import {styles} from "@/styles/welcome.style";
import {Typography} from "@/compnents/Typography";
import {colors} from "@/constants/theme";
import {Button} from "@/compnents/Button";
import Animated, {FadeIn, FadeInDown} from "react-native-reanimated";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => {
                }}>
                    <Typography size={24} color={colors.text}>Sign In</Typography>
                </TouchableOpacity>
                <Animated.Image
                    entering={FadeIn.duration(2000)}
                    source={require('../../assets/images/welcome.png')}
                    style={styles.welcomeImage}
                    resizeMode={'contain'}/>
            </View>
            <View style={styles.footer}>
                <Animated.View entering={FadeInDown.duration(1000).springify().damping(12)}
                               style={{alignItems: 'center'}}>
                    <Typography size={30} color={colors.text} fontWeight={'800'}>Always take control</Typography>
                    <Typography size={30} color={colors.text} fontWeight={'800'}>of your finance</Typography>
                </Animated.View>
                <Animated.View entering={FadeInDown.duration(1000).delay(100).springify().damping(12)}
                               style={{alignItems: 'center'}}>
                    <Typography size={17} color={colors.textLight}>Finances must be arranged to set a
                        better</Typography>
                    <Typography size={17} color={colors.textLight}>life stylee</Typography>
                </Animated.View>
            </View>
            <Animated.View entering={FadeInDown.duration(1000).delay(200).springify().damping(12)}
                           style={styles.buttonContainer}>
                <Button>
                    <Typography size={22} color={colors.neutral900} fontWeight={'600'}>Get Started</Typography>
                </Button>
            </Animated.View>
        </View>
    );
}