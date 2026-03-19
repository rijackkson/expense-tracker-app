import Backbutton from '@/components/Backbutton';
import Input from '@/components/Input';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { verticalScale } from '@/util/styling';
import { useRouter } from 'expo-router';
import * as Icons from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';

const Register = () => {

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef = useRef("");
    const [isLoading, setLoading] = useState(false);
    const router = useRouter()

    const handleSubmit = async () => {
        if (!emailRef.current || !passwordRef.current || nameRef.current) {
            Alert.alert("Sign up", "Please fill all the fields");
            return;
        }

        console.log("email:", emailRef.current);
        console.log("password:", passwordRef.current);
    };

    return (
        <ScreenWrapper>
            <View style={styles.container}>

                <Backbutton iconSize={28} />

                <View style={{ gap: 5, marginTop: spacingY._20 }}>
                    <Typo size={30} fontWeight={"800"}>
                        Let's,
                    </Typo>

                    <Typo size={30} fontWeight={"800"}>
                       Get started
                    </Typo>
                </View>

                {/* form */}

                <View style={styles.form}>

                    <Typo size={16} color={colors.textLighter}>
                        Create an acconunt to track your expenses
                    </Typo>

                    <Input
                        placeholder="Enter your name"
                        onChangeText={(value) => (nameRef.current = value)}
                        icon={
                            <Icons.User
                                size={verticalScale(26)}
                                color={colors.neutral350}
                                weight="fill"
                            />
                        }
                    />
                       <Input
                        placeholder="Enter your email"
                        onChangeText={(value) => (emailRef.current = value)}
                        icon={
                            <Icons.At
                                size={verticalScale(26)}
                                color={colors.neutral350}
                                weight="fill"
                            />
                        }
                    />

                    <Input
                        placeholder="Enter your Password"
                        secureTextEntry
                        onChangeText={(value) => (passwordRef.current = value)}
                        icon={
                            <Icons.Lock
                                size={verticalScale(26)}
                                color={colors.neutral350}
                                weight="fill"
                            />
                        }
                    />

                    <Typo
                        size={14}
                        color={colors.text}
                        style={{ alignSelf: "flex-end" }}
                    >
                        Forgot Password?
                    </Typo>

                    <Pressable style={{ backgroundColor: colors.primary, padding: 15, borderRadius: 10 }} onPress={handleSubmit}>
                        <Typo fontWeight={"700"} color={colors.black} size={16}>
                            Sign Up
                        </Typo>
                    </Pressable>

                </View>

                {/* footer */}

                <View style={styles.footer}>
                    <Typo size={15}>Already have an account?</Typo>

                    <Pressable onPress={() => router.navigate("/(auth)/login")}>
                        <Typo size={15} fontWeight={"700"} color={colors.primary}>
                            Login
                        </Typo>
                    </Pressable>
                </View>

            </View>
        </ScreenWrapper>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingX._30,
        paddingHorizontal: spacingX._20,
    },
    form: {
        gap: spacingY._20,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 5
    }
});