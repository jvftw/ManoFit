import React from 'react';
import { Box, Button, VStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LogBox } from 'react-native';
import { getUser } from '../../../user';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications




export function Home() {
    const navigation = useNavigation();
    const username = getUser();

    const handleExit = async () => {
        try {
            await AsyncStorage.setItem('logado', 'false');
            console.log('Usuário saiu.');
            navigation.navigate('Start');
        } catch (error) {
            console.log('Erro ao tentar sair:', error);
        }
    };

    const handleConfig = async () => {
        try {
            await AsyncStorage.setItem('logado', 'false');
            console.log('Usuário saiu.');
            navigation.navigate('AccountSettings');
        } catch (error) {
            console.log('Erro ao tentar sair:', error);
        }
    };

    const handleRewards = async () => {
        try {
            await AsyncStorage.setItem('logado', 'false');
            console.log('Usuário saiu.');
            navigation.navigate('Rewards');
        } catch (error) {
            console.log('Erro ao tentar sair:', error);
        }
    };

    return (
        <Box flex={1} safeArea>
              
            <Box marginLeft={"5%"} marginTop={"5%"} width={"400"} height={"100"}>
                <Text color={'gray.400'} >Bem-vindo de volta</Text>
                <Text fontSize={"2xl"} fontWeight={"extrabold"} color={"#001879"} >Mano {username}</Text>
            </Box>

            <VStack flex={1} justifyContent="center" alignItems="center" space={5}>
                <LinearGradient
                    colors={['#001879', '#9F2929']}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={{ borderRadius: 30, width: '30%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Button variant="unstyled" onPress={() => navigation.navigate("StartRun")} _text={{ color: 'white' }}>
                        <VStack justifyContent="center" alignItems="center">
                            <Ionicons name="walk-outline" size={64} color="white" />
                            <Text fontWeight="bold" color="white">Caminhar</Text>
                        </VStack>
                    </Button>
                </LinearGradient>

                <LinearGradient
                    colors={['#001879', '#9F2929']}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={{ borderRadius: 30, width: '30%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Button variant="unstyled" onPress={handleConfig} _text={{ color: 'white' }}>
                        <VStack justifyContent="center" alignItems="center">
                            <Ionicons name="settings-outline" size={64} color="white" />
                            <Text fontWeight="bold" color="white">Configurações</Text>
                        </VStack>
                    </Button>
                </LinearGradient>

                <LinearGradient
                    colors={['#001879', '#9F2929']}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={{ borderRadius: 30, width: '30%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Button variant="unstyled" onPress={handleExit} _text={{ color: 'white' }}>
                        <VStack justifyContent="center" alignItems="center">
                            <Ionicons name="exit-outline" size={64} color="white" />
                            <Text fontWeight="bold" color="white">Sair</Text>
                        </VStack>
                    </Button>
                </LinearGradient>

                <LinearGradient
                    colors={['#001879', '#9F2929']}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={{ borderRadius: 30, width: '30%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Button variant="unstyled" onPress={handleRewards} _text={{ color: 'white' }}>
                        <VStack justifyContent="center" alignItems="center">
                            <Ionicons name="star" size={64} color="white" />
                            <Text fontWeight="bold" color="white">Recompensas</Text>
                        </VStack>
                    </Button>
                </LinearGradient>
            </VStack>
        </Box>
    );
}


