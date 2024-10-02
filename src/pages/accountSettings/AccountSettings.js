import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Button, FormControl, Input, Stack, Text, Image, Row, View, Center, Pressable, Link, Switch } from "native-base";
import { useNavigation } from "@react-navigation/native"
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export function AccountSettings(){
    const navigation = useNavigation();

    const handleProfile = async () => {
        try {
            await AsyncStorage.setItem('logado', 'false');
            console.log('Usuário saiu.');
            navigation.navigate('ChangeAccount');
        } catch (error) {
            console.log('Erro ao tentar sair:', error);
        }
    };

    const handlePassword = async () => {
        try {
            await AsyncStorage.setItem('logado', 'false');
            console.log('Usuário saiu.');
            navigation.navigate('ChangePassword');
        } catch (error) {
            console.log('Erro ao tentar sair:', error);
        }
    };

    return(
        <View  flex={1} alignItems={"center"} justifyContent={'center'} bgColor='light.100'>

        <Image marginBottom={"10%"} marginRight={"65%"} alignItems={"center"} justifyContent={"center"} source={require("../../assets/foto9.png")}></Image>
     
        <Box marginBottom={"10%"} width={290} height={157.5} display={"flex"} alignItems={"center"} justifyContent={'center'} rounded={10} bgColor={"white"} shadow={5}>
            <Text  alignSelf="flex-start" marginLeft={"5%"} display={"flex"} fontSize={20} bold color={'#001879'} >Conta</Text>
            <Pressable marginTop={"4%"} alignSelf='flex-start' display={'flex'} marginLeft={"2.5%"} onPress={handleProfile} >
            {({ isHovered, isFocused, isPressed }) => (
                                <Image
                                    alignSelf="flex-start" 
                                    width={"250"}
                                    display={"flex"}
                                    height={"5"}
                                    source={require("../../assets/foto10.png")}
                    
                                    style={{
                                        transform: [{ scale: isPressed ? 0.93 : 1 }]
                                    }} >
                                </Image>)}
            </Pressable>

            <Pressable  marginTop={"2"} alignSelf='flex-start' display={'flex'} marginLeft={"3%"} marginBottom={"10%"}onPress={handlePassword} >
            {({ isHovered, isFocused, isPressed }) => (
                                <Image
                                    alignSelf="flex-start" 
                                    width={"250"}
                                    display={"flex"}
                                    height={"5"}
                                    source={require("../../assets/foto11.png")}
                                    style={{
                                        transform: [{ scale: isPressed ? 0.93 : 1 }]
                                    }} >
                                </Image>)}
            </Pressable>

        </Box>

        <Box  marginBottom={"40%"} width={290} height={157.5} display={"flex"} alignItems={"center"} justifyContent={'center'} rounded={10} bgColor={"white"} shadow={5}>
        <Text alignSelf="flex-start" marginLeft={"5%"} display={"flex"}  fontSize={20} bold color={'#001879'}>Aparência</Text>

              <Box  display={"flex"} alignItems={"center"} justifyContent={'center'} flexDirection={"row"}>
                
                <Box marginRight={"17%"}>

                  <Image marginLeft={"4%"}
                    resizeMode="center"
                    width={"100"}
                    display={"flex"}
                    height={"100"}
                
                    source={require("../../assets/foto12.png")}>     
                  </Image>

                </Box>

                <Box  marginBottom={"4"}  display={"flex"} alignItems={"flex-end"} justifyContent={"flex-end"} position={"relative"} >

                    <Switch size={"sm"} position={"absolute"} bottom={"8%"} ></Switch>
                    <Text fontSize={"10"} top={"21%"} color={"#B6B4C2"} right={"12%"} >PT-BR</Text>
                    <Text fontSize={"10"} top={"33%"} color={"#B6B4C2"} right={"12%"} >Bandeira do Amazonas</Text>
                </Box>

              </Box> 

        </Box>
        


        </View>
    )
};



