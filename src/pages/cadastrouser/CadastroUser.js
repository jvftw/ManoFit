import React, { useState } from 'react';
import { Box, FormControl, Input, Stack, Text, Image, View, Center, Pressable, Alert } from "native-base";
import { LogBox } from 'react-native';
import { setUser } from '../../../user';
import config from '../../../backend/config/config';
import { useNavigation } from "@react-navigation/native";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

export function CadastroUser() {
    const [username, setUsernameState] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigation = useNavigation();


    // Envia os dados do formulário para o backend
    async function handleSubmit() {
        setError(null);
        setSuccess(null);

        if (!username || !password || !email || !confirmPassword) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        if (password !== confirmPassword) {
            setError("As senhas não correspondem.");
            return;
        }

        try {
            let response = await fetch( config.urlRootNode+'/cadastrarusuario', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar usuário');
            }

            let data = await response.json();
            setUser(username); // Atualize o valor do usuário global
            console.log("Usuário cadastrado")
            navigation.navigate('Home');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <View flex={1} alignItems={"center"} justifyContent={'center'} bgColor='white'>
            <Center pt={20}>
                <Text bold fontSize={25.98} color='#001879'>Registrar</Text>
                {error && <Alert w="100%" status="error">{error}</Alert>}
                {success && <Alert w="100%" status="success">{success}</Alert>}
                <FormControl>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Input
                            variant={'filled'}
                            width={344.49}
                            height={52.93}
                            placeholder="Nome do usuário"
                            bgColor={'#F8FAFC'}
                            onChangeText={(text) => setUsernameState(text)}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Input
                            variant={'filled'}
                            width={344.49}
                            height={52.93}
                            placeholder="Email"
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
                            placeholder="Senha"
                            bgColor={'#F8FAFC'}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Input
                            variant={'filled'}
                            width={344.49}
                            height={52.93}
                            type="password"
                            placeholder="Confirme a Senha"
                            bgColor={'#F8FAFC'}
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Pressable onPress={handleSubmit}>
                            {({ isHovered, isFocused, isPressed }) => (
                                <Image
                                    width={345.46}
                                    height={52.93}
                                    source={require("../../assets/foto7.png")}
                                    style={{
                                        transform: [{ scale: isPressed ? 0.93 : 1 }]
                                    }}
                                />
                            )}
                        </Pressable>
                    </Stack>
                </FormControl>
            </Center>
            <Box display={"flex"} alignItems={"center"} justifyContent={'center'} pt={16}>
                <Text fontSize={19.25} color='#001879'>Ou acesse com</Text>
                <Stack direction={"row"} padding={6} space={5}>
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
        </View>
    );
}
