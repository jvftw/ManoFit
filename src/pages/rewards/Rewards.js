// Login.js
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Button, FormControl, Input, Stack, Text, Image, Row, View, Center, Pressable, Link, Switch, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export function Rewards(){
    return(
     
    <View flex={1} display={"flex"} position={"relative"} bgColor='light.100'>

        <Box marginTop={"14%"}  display={"flex-start"} alignItems={"center"} justifyContent={'flex-start'} flexDirection={"row"}>
                
                <Box marginLeft={"3%"}  display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} position={"relative"} >

                  <Image 
                    resizeMode="center"
                    width={"10"}
                    display={"flex"}
                    height={"10"}
                
                    source={require("../../assets/foto13.png")}>     
                  </Image>

                </Box>

                <Box marginLeft={"13%"}   display={"flex"} alignItems={"center"} justifyContent={"center"} position={"relative"} >

                <Text fontWeight={"semibold"} fontSize={25.98} color='#001879'>Recompensas</Text>

                </Box>

        </Box >

          <HStack marginTop={"7%"} HStack space={3} justifyContent="center" >
          
          <Pressable >
            {({ isFocused, isHovered, isPressed }) => (
                <Box rounded={10} bgColor={"white"} shadow={5} height={"180"} width={"165"} display={"flex"} justifyContent={"center"} alignItems={"center"} style={{transform: [{ scale: isPressed ? 0.93 : 1 }]}} >
                     <Image 
                        marginBottom={"5%"} 
                        resizeMode="center"
                        width={" 90%"}
                        display={"flex"}
                        height={"90%"}
                        
                
                        source={require("../../assets/foto14.png")}>     
                     </Image>
                     
                     <HStack display={"flex"} alignContent={"flex-start"} justifyContent={"flex-start"} alignItems={"flex-start"} position={"relative"} right={"27%"} bottom={"13%"}>

                      <Text backgroundColor={"cyan.50"} fontSize={"xl"} fontWeight={"semibold"} fontStyle={"italic"} color='#001879' >90</Text>
                      <Image 
                        resizeMode="center"
                        display={"flex"}
                        width={"100%"}
                        height={"100%"}
                        position={"absolute"}
                        right={"-60%"}
  
                        
                
                        source={require("../../../assets/icon.png")}>     
                     </Image>
                     </HStack>

            </Box>)}
            </Pressable>

            <Pressable >
            {({ isFocused, isHovered, isPressed }) => (
                <Box rounded={10} bgColor={"white"} shadow={5} height={"180"} width={"165"} display={"flex"} justifyContent={"center"} alignItems={"center"} style={{transform: [{ scale: isPressed ? 0.93 : 1 }]}} >
                     <Image 
                        marginBottom={"5%"} 
                        resizeMode="center"
                        width={" 70%"}
                        display={"flex"}
                        height={"90%"}
                        
                
                        source={require("../../assets/foto15.png")}>     
                     </Image>
                     
                     <HStack display={"flex"} alignContent={"flex-start"} justifyContent={"flex-start"} alignItems={"flex-start"} position={"relative"} right={"27%"} bottom={"13%"}>

                      <Text backgroundColor={"cyan.50"} fontSize={"xl"} fontWeight={"semibold"} fontStyle={"italic"} color='#001879' >500</Text>
                      <Image 
                        resizeMode="center"
                        display={"flex"}
                        width={"100%"}
                        height={"100%"}
                        position={"absolute"}
                        right={"-60%"}
  
                        
                
                        source={require("../../../assets/icon.png")}>     
                     </Image>
                     </HStack>

            </Box>)}
            </Pressable>

          </HStack>

        <Box>

        <HStack marginTop={"7%"} HStack space={3} justifyContent="center" >
          
          <Pressable >
            {({ isFocused, isHovered, isPressed }) => (
                <Box rounded={10} bgColor={"white"} shadow={5} height={"180"} width={"165"} display={"flex"} justifyContent={"center"} alignItems={"center"} style={{transform: [{ scale: isPressed ? 0.93 : 1 }]}} >
                     <Image 
                        marginBottom={"5%"} 
                        resizeMode="center"
                        width={" 85%"}
                        display={"flex"}
                        height={"90%"}
                        
                
                        source={require("../../assets/foto17.png")}>     
                     </Image>
                     
                     <HStack display={"flex"} alignContent={"flex-start"} justifyContent={"flex-start"} alignItems={"flex-start"} position={"relative"} right={"27%"} bottom={"13%"}>

                      <Text backgroundColor={"cyan.50"} fontSize={"xl"} fontWeight={"semibold"} fontStyle={"italic"} color='#001879' >200</Text>
                      <Image 
                        resizeMode="center"
                        display={"flex"}
                        width={"100%"}
                        height={"100%"}
                        position={"absolute"}
                        right={"-60%"}
  
                        
                
                        source={require("../../../assets/icon.png")}>     
                     </Image>
                     </HStack>

            </Box>)}
            </Pressable>

            <Pressable >
            {({ isFocused, isHovered, isPressed }) => (
                <Box rounded={10} bgColor={"white"} shadow={5} height={"180"} width={"165"} display={"flex"} justifyContent={"center"} alignItems={"center"} style={{transform: [{ scale: isPressed ? 0.93 : 1 }]}} >
                     <Image 
                        marginBottom={"5%"} 
                        resizeMode="center"
                        width={" 80%"}
                        display={"flex"}
                        height={"90%"}
                        
                
                        source={require("../../assets/foto16.png")}>     
                     </Image>
                     
                     <HStack display={"flex"} alignContent={"flex-start"} justifyContent={"flex-start"} alignItems={"flex-start"} position={"relative"} right={"27%"} bottom={"13%"}>

                      <Text backgroundColor={"cyan.50"} fontSize={"xl"} fontWeight={"semibold"} fontStyle={"italic"} color='#001879' >100</Text>
                      <Image 
                        resizeMode="center"
                        display={"flex"}
                        width={"100%"}
                        height={"100%"}
                        position={"absolute"}
                        right={"-60%"}
  
                        
                
                        source={require("../../../assets/icon.png")}>     
                     </Image>
                     </HStack>

            </Box>)}
            </Pressable>

          </HStack>
          
        </Box>

        <Box>

        <HStack marginTop={"7%"} HStack space={3} justifyContent="center" >
          
          <Pressable >
            {({ isFocused, isHovered, isPressed }) => (
                <Box rounded={10} bgColor={"white"} shadow={5} height={"180"} width={"165"} display={"flex"} justifyContent={"center"} alignItems={"center"} style={{transform: [{ scale: isPressed ? 0.93 : 1 }]}} >
                     <Image 
                        marginBottom={"5%"} 
                        resizeMode="center"
                        width={" 60%"}
                        display={"flex"}
                        height={"90%"}
                        
                
                        source={require("../../assets/foto19.png")}>     
                     </Image>
                     
                     <HStack display={"flex"} alignContent={"flex-start"} justifyContent={"flex-start"} alignItems={"flex-start"} position={"relative"} right={"27%"} bottom={"13%"}>

                      <Text backgroundColor={"cyan.50"} fontSize={"xl"} fontWeight={"semibold"} fontStyle={"italic"} color='#001879' >150</Text>
                      <Image 
                        resizeMode="center"
                        display={"flex"}
                        width={"100%"}
                        height={"100%"}
                        position={"absolute"}
                        right={"-60%"}
  
                        
                
                        source={require("../../../assets/icon.png")}>     
                     </Image>
                     </HStack>

            </Box>)}
            </Pressable>

            <Pressable >
            {({ isFocused, isHovered, isPressed }) => (
                <Box rounded={10} bgColor={"white"} shadow={5} height={"180"} width={"165"} display={"flex"} justifyContent={"center"} alignItems={"center"} style={{transform: [{ scale: isPressed ? 0.93 : 1 }]}} >
                     <Image 
                        marginBottom={"5%"} 
                        resizeMode="center"
                        width={" 70%"}
                        display={"flex"}
                        height={"90%"}
                        
                
                        source={require("../../assets/foto18.png")}>     
                     </Image>
                     
                     <HStack display={"flex"} alignContent={"flex-start"} justifyContent={"flex-start"} alignItems={"flex-start"} position={"relative"} right={"27%"} bottom={"13%"}>

                      <Text backgroundColor={"cyan.50"} fontSize={"xl"} fontWeight={"semibold"} fontStyle={"italic"} color='#001879' >300</Text>
                      <Image 
                        resizeMode="center"
                        display={"flex"}
                        width={"100%"}
                        height={"100%"}
                        position={"absolute"}
                        right={"-60%"}
  
                        
                
                        source={require("../../../assets/icon.png")}>     
                     </Image>
                     </HStack>

            </Box>)}
            </Pressable>

          </HStack>

        </Box>
        
    </View>    
    )
}