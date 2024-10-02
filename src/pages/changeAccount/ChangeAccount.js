import React, { useState } from 'react';
import { Box, Button, FormControl, Input, Stack, Text, Image, Row, View, Center, Pressable, Link, Switch, Alert } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { LogBox } from 'react-native';
import config from '../../../backend/config/config';
import { setUser } from '../../../user';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

export function ChangeAccount() {
    const [username, setUsernameState] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigation = useNavigation();

    async function handleUpdate() {
        setError(null);
        setSuccess(null);

        if (!username || !email) {
            setError("Por favor, preencha todos os campos.");
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
                    username: username,
                    email: email
                })
            });

            if (!response.ok) {
                let errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao atualizar o nome do usuário');
            }

            

            let data = await response.json();
            setUser(data.username); 
            console.log("Nome de usuário atualizado");
            navigation.navigate('Login');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <View bgColor='white' flex={1}>
            <Center marginTop={"13%"} pt={40} bgColor='white'>
                <Text bold fontSize={25.98} color='#001879'>Troque seu nome</Text>
                {error && <Alert w="100%" status="error">{error}</Alert>}
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
                            placeholder="Novo Nome"
                            bgColor={'#F8FAFC'}
                            onChangeText={(text) => setUsernameState(text)}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label></FormControl.Label>
                        <Pressable onPress={handleUpdate}>
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
