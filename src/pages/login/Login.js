import React, { useState } from "react";
import config from "../../../backend/config/config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Button, FormControl, Input, Stack, Text, Image, View, Center, Pressable, Link, Alert } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { LogBox } from 'react-native';
import { setUser } from '../../../user';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

export function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigation = useNavigation();

    const handleLogin = async () => {
        setError(null);
        setSuccess(null);

        if (!email || !password) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const queryParams = new URLSearchParams({ email, password }).toString();
            let response = await fetch(config.urlRootNode+`/loginusuario?${queryParams}`, {
                method: 'GET', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.log('Erro na resposta do servidor:', errorText);
                setError("Erro ao autenticar usuário.");
                return;
            }

            let data = await response.json();
            console.log('Dados recebidos do servidor:', data);

            if (data && data.username) {
                setUser(data.username);
                console.log("Usuário autenticado");
                navigation.navigate('Home');
            } else {
                setError("Usuário não encontrado ou senha incorreta.");
            }
        } catch (error) {
            console.log('Erro na requisição:', error);
            setError("Erro ao autenticar usuário.");
        }
    };

    const handleExit = async () => {
        try {
            await AsyncStorage.setItem('logado', 'false');
            console.log('Usuário saiu.');
            navigation.navigate('CadastroUser');
        } catch (error) {
            console.log('Erro ao tentar sair:', error);
        }
    };

    return (
        <View bgColor='white' flex={1}>
            <Center pt={40} bgColor='white'>
                <Text bold fontSize={25.98} color='#001879'>Entrar</Text>
                {error && <Alert w="65%" status="error">{error}</Alert>}
                <FormControl alignItems={'center'}>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Input
                            variant={'filled'}
                            width={344.49}
                            height={52.93}
                            placeholder="email"
                            bgColor={'#F8FAFC'}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Input
                            variant={'filled'}
                            width={344.49}
                            height={52.93}
                            type="password"
                            placeholder="senha"
                            bgColor={'#F8FAFC'}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Pressable onPress={handleLogin}>
                            {({ isHovered, isFocused, isPressed }) => (
                                <Image
                                    width={345.46}
                                    height={52.93}
                                    source={require("../../assets/foto8.png")}
                                    style={{
                                        transform: [{ scale: isPressed ? 0.93 : 1 }]
                                    }}
                                />
                            )}
                        </Pressable>
                    </Stack>
                </FormControl>
                {error && <Text color="red">{error}</Text>}
                <Link>
                    <Text bold color={'#001879'}>Esqueceu a senha?</Text>
                </Link>
            </Center>
            <Box display={"flex"} alignItems={"center"} justifyContent={'center'} pt={16}>
                <Text fontSize={19.25} color='#001879'>Ou acesse com</Text>
                <Stack direction={"row"} space={5}>
                    <Pressable>
                        {({ isFocused, isHovered, isPressed }) => (
                            <Image
                                source={require("../../assets/foto6.png")}
                                style={{
                                    transform: [{ scale: isPressed ? 0.93 : 1 }]
                                }}
                            />
                        )}
                    </Pressable>
                    <Pressable>
                        {({ isFocused, isHovered, isPressed }) => (
                            <Image
                                source={require("../../assets/foto5.png")}
                                style={{
                                    transform: [{ scale: isPressed ? 0.93 : 1 }]
                                }}
                            />
                        )}
                    </Pressable>
                    <Pressable>
                        {({ isFocused, isHovered, isPressed }) => (
                            <Image
                                source={require("../../assets/foto4.png")}
                                style={{
                                    transform: [{ scale: isPressed ? 0.93 : 1 }]
                                }}
                            />
                        )}
                    </Pressable>
                </Stack>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={'center'} pt={20}>
                <Pressable onPress={handleExit}>
                    <Text color={'#001879'}>Não possui uma conta? <Text underline bold color={'#001879'}>Registre-se</Text></Text>
                </Pressable>
            </Box>
        </View>
    );
}
