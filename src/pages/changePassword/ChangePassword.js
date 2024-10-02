import React, { useState } from 'react';
import { Box, Button, FormControl, Input, Stack, Text, Image, Row, View, Center, Pressable, Alert } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { LogBox } from 'react-native';
import config from '../../../backend/config/config';
import { setUser } from '../../../user';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

export function ChangePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigation = useNavigation();

    async function handleUpdate() {
        setError(null);
        setSuccess(null);

        if (!email || !password || !confirmPassword) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        if (password !== confirmPassword) {
            setError("As senhas não correspondem.");
            return;
        }

        try {
            let response = await fetch(config.urlRootNode + '/atualizarusuario', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                let errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao atualizar a senha do usuário');
            }

            let data = await response.json();
            setSuccess("Senha atualizada com sucesso");
            console.log("Senha de usuário atualizada");
            navigation.navigate('Login');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <View bgColor='white' flex={1}>
            <Center marginTop={"10%"} pt={40} bgColor='white'>
                <Text bold fontSize={25.98} color='#001879'>Troque sua senha</Text>
                {error && <Alert w="100%" status="error">{error}</Alert>}
                {success && <Alert w="100%" status="success">{success}</Alert>}
                <FormControl alignItems={'center'}>
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
                            placeholder="Nova senha"
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
                            placeholder="Confirme a nova senha"
                            bgColor={'#F8FAFC'}
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Pressable onPress={handleUpdate} >
                            {({ isHovered, isFocused, isPressed }) => (
                                <Image
                                    width={365.46}
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
            </Center>
        </View>
    );
}
