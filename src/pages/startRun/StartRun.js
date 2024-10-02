import React, { useState, useEffect } from 'react';
import { Box, IconButton, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { PreloaderRun } from '../../components/preloaderRun/PreloaderRun';
import { Pedometer } from 'expo-sensors';
import * as Notifications from 'expo-notifications';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
});

export function StartRun() {
    const [isRunning, setIsRunning] = useState(false);
    const [counter, setCounter] = useState(0);
    const [showPreloader, setShowPreloader] = useState(true);
    const [distance, setDistance] = useState(0);
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const subscribeToStepCount = async () => {
            const isAvailable = await Pedometer.isAvailableAsync();
            setIsPedometerAvailable(String(isAvailable));

            let subscription;

            if (isAvailable) {
                subscription = Pedometer.watchStepCount(result => {
                    if (isRunning) { // Check if running before updating step count
                        setCurrentStepCount(result.steps);
                    }
                }).catch(error => {
                    console.log('Error:', error);
                });
            }

            return subscription;
        };

        let subscription;

        const setupSubscription = async () => {
            subscription = await subscribeToStepCount();
        };

        setupSubscription();

        return () => {
            if (subscription) {
                subscription.remove();
            }
        };
    }, [isRunning]);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
                setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
            }, 1000); // Incrementa a contagem a cada segundo
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, [isRunning]);

    useEffect(() => {
        if (isRunning) {
            // Suponha que o comprimento médio de um passo seja 0.76 metros (aproximadamente)
            const averageStepLengthMeters = 0.76;
            const totalDistanceMeters = currentStepCount * averageStepLengthMeters;
            const totalDistanceKilometers = totalDistanceMeters / 1000;
            setDistance(totalDistanceKilometers);
            console.log(currentStepCount);
        }
    }, [isRunning, currentStepCount]);


    useEffect(() => {

        const notificationInterval = setInterval(() => {
            if (isRunning) {
                sendNotification();
            }
        }, 3000); // 5 minutes in milliseconds

        return () => clearInterval(notificationInterval);
    }, [isRunning]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const toggleRun = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    };

    const pauseRun = () => {
        setIsRunning(false);
    };

    const handlePreloaderFinish = () => {
        setShowPreloader(false);
        setIsRunning(true);
    };

    const sendNotification = async () => {
        try {
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Tempo decorrido',
                    body: `Você já correu por ${formatTime(elapsedTime)}`,
                },
                trigger:{
                    seconds:2
                }
            });
            console.log("Notificação enviada com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar notificação:", error);
        }
    };

    return (
        <LinearGradient
            colors={['#001879', '#9F2929']}
            start={[0, 0]}
            end={[1, 1]}
            style={{ flex: 1 }}
        >
            <StatusBar style="light" />
            <Box flex={1}>
                {showPreloader ? (
                    <PreloaderRun onFinish={handlePreloaderFinish} />
                ) : (
                    <Box flex={1} safeArea p={5} justifyContent={"space-between"}>
                        <Box flexDirection={'row'} justifyContent={'space-between'} pt={10}>
                            <Box alignItems={'center'}>
                                <Text color={'white'} fontSize={25} fontWeight={'bold'}>--</Text>
                                <Text color={'white'} fontSize={16}>Ritimo</Text>
                            </Box>
                            <Box alignItems={'center'}>
                                <Text color={'white'} fontWeight={"bold"} fontSize={25}>--</Text>
                                <Text color={'white'} fontSize={16}>BPM</Text>
                            </Box>
                            <Box alignItems={'center'}>
                                <Text color={'white'} fontWeight={'bold'} fontSize={25}>{formatTime(counter)}</Text>
                                <Text color={'white'} fontSize={16}>Duração</Text>
                            </Box>
                        </Box>
                        <Box alignItems={'center'}>
                            <Text color={'white'} fontSize={100} fontWeight={'bold'}>{distance.toFixed(2)}</Text>
                            <Text color={'white'} fontSize={20}>quilômetros</Text>
                        </Box>
                        <Box alignItems={'center'}>
                            {isRunning ? (
                                <IconButton onPress={pauseRun} w={100} h={100} icon={<AntDesign name="pausecircle" size={80} color="white" />} />
                            ) : (
                                <IconButton onPress={toggleRun} w={100} h={100} icon={<AntDesign name="play" size={80} color="white" />} />
                            )}
                        </Box>
                    </Box>
                )}
            </Box>
        </LinearGradient>
    );
}
