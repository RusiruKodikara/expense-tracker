import {View, StyleSheet, Pressable, Alert} from "react-native";
import {styles} from "@/styles/login.style";
import BackButton from "@/compnents/BackButton";
import {colors, spacingX, spacingY} from "@/constants/theme";
import {Typography} from "@/compnents/Typography";
import Input from "@/compnents/Input";
import * as Icons from 'phosphor-react-native';
import {verticalScale} from "@/utils/styling";
import {useRef, useState} from "react";
import {Button} from "@/compnents/Button";
import {useRouter} from "expo-router";
import Animated, {FadeInDown, FadeInLeft} from "react-native-reanimated";

export default function Register() {
    const router = useRouter();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
        if (!emailRef.current || !passwordRef.current || !nameRef.current) {
            Alert.alert('Error', 'Please fill all the fields');
        } else {
            console.log(nameRef.current, emailRef.current, passwordRef.current);
        }
    }
    return (
        <View style={styles.container}>
            <BackButton/>

            <Animated.View entering={FadeInDown.duration(1000)} style={{gap: 5}}>
                <Typography size={30} fontWeight={'800'}>Let&#39;s,</Typography>
                <Typography size={30} fontWeight={'800'}>Get Started</Typography>
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(1000).delay(100).springify()} style={styles.form}>
                <Typography size={16} color={colors.textLighter}>Create your account track all your expenses.</Typography>
                <Input
                    placeholder="Enter you name"
                    onChangeText={(text) => nameRef.current = text}
                    icon={
                        <Icons.User
                            size={verticalScale(26)}
                            color={colors.neutral300}
                            weight={'fill'}/>
                    }/>
                <Input
                    placeholder="Enter you email"
                    onChangeText={(text) => emailRef.current = text}
                    icon={
                        <Icons.At
                            size={verticalScale(26)}
                            color={colors.neutral300}
                            weight={'fill'}/>
                    }/>
                <Input
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={(text) => passwordRef.current = text}
                    icon={
                        <Icons.Lock
                            size={verticalScale(26)}
                            color={colors.neutral300}
                            weight={'fill'}/>
                    }/>

                <Button loading={isLoading} onPress={handleSubmit} style={{marginTop: 20}}>
                    <Typography size={22} color={colors.neutral900} fontWeight={'600'}>Sign up</Typography>
                </Button>
            </Animated.View>

            <Animated.View entering={FadeInLeft.springify().delay(100).duration(2000)} style={styles.footer}>
                <Typography size={19} color={colors.textLighter}>Already have an account?</Typography>
                <Pressable onPress={() => {
                    router.navigate('/(auth)/login');
                }}>
                    <Typography size={17} color={colors.text} fontWeight={'600'}>Sign in</Typography>
                </Pressable>
            </Animated.View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        color: colors.text,
    },
    form: {
        gap: spacingY._20,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: '500',
        color: colors.text,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
});