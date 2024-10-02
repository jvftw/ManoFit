import React, { useState, useEffect, useRef } from 'react';
import { Box, Text } from 'native-base';
import { Animated } from 'react-native';

export function PreloaderRun({ onFinish }) {
    const [counter, setCounter] = useState(3);
    const [currentNumber, setCurrentNumber] = useState(counter);
    const scaleAnimation = useRef(new Animated.Value(1)).current;


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => prevCounter - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (counter === 0) {
            onFinish();
            return;
        }

        setCurrentNumber(counter);

        Animated.timing(scaleAnimation, {
            toValue: 2,
            duration: 1200,
            useNativeDriver: true,
        }).start(() => {
            scaleAnimation.setValue(1); // Resetar a animação para o próximo número
        });
    }, [counter, onFinish, scaleAnimation]);

    return (
        <Box flex={1} w={"100%"} background={"#000"} justifyContent="center" alignItems="center">
            <Animated.Text
                style={{ fontSize:50,color:"#fff",transform: [{ scale: scaleAnimation }] }}
               
                
                fontWeight="bold"
            >
                {currentNumber}
            </Animated.Text>
        </Box>
    );
}
