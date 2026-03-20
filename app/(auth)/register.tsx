import Backbutton from '@/components/Backbutton';
import Input from '@/components/Input';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { useAuth } from '@/contexts/authContext';
import { verticalScale } from '@/util/styling';
import { useRouter } from 'expo-router';
import * as Icons from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, View } from 'react-native';

const Register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef = useRef("");
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const { register: registerUser } = useAuth();

    const handleSubmit = async () => {
        // CORREÇÃO: Adicionado o "!" antes de nameRef.current
        // Agora o alerta só aparece se algum dos campos estiver VAZIO.
        if (!emailRef.current || !passwordRef.current || !nameRef.current) {
            Alert.alert("Sign up", "Please fill all the fields");
            return;
        }

        setLoading(true);
        const res = await registerUser(
            emailRef.current,
            passwordRef.current,
            nameRef.current
        );
        setLoading(false);

        console.log('register result: ', res);
        
        if (!res.success) {
            Alert.alert("Sign up", res.msg);
        } else {
            // Opcional: Navegar para home ou mostrar sucesso
            // router.replace('/(tabs)/home');
        }
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

                {/* Form */}
                <View style={styles.form}>
                    <Typo size={16} color={colors.textLighter}>
                        Create an account to track your expenses
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
                        autoCapitalize="none"
                        keyboardType="email-address"
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

                    {/* Botão de Cadastro com Estado de Loading */}
                    <Pressable 
                        style={[
                            styles.button, 
                            isLoading && { opacity: 0.7 }
                        ]} 
                        onPress={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator color={colors.black} />
                        ) : (
                            <Typo fontWeight={"700"} color={colors.black} size={16}>
                                Sign Up
                            </Typo>
                        )}
                    </Pressable>
                </View>

                {/* Footer */}
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
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        marginTop: 10
    }
});