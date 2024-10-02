import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Button, Image, Link, Text } from "native-base";
import Swiper from "react-native-swiper";

export function CarrouselStart() {
    const navigation = useNavigation();
    return (
        <Swiper paginationStyle={{ bottom: 140 }}>

            <Box flex={1}>
                <Image
                 alt="Corredor"
                    w={"100%"}
                    source={require("../../assets/foto1.png")}
                />
                <Box
                    position={'absolute'}
                    bottom={0}
                    height={"50%"}
                    w={"100%"}

                >
                    <LinearGradient
                        colors={['#9D2929', 'rgba(0,0,0,0)']}
                        start={[0, 1]}
                        end={[0, 0]}
                        locations={[0.70, 1]}
                        style={{ flex: 1 }}
                    >
                        <Box alignItems={'center'} p={5} marginTop={100}>
                            <Text color={"#fff"} fontSize={26}>
                                Bem-vindo ao{' '}
                                <Text color={"#fff"} fontSize={26} fontWeight="bold" fontStyle={'italic'}>
                                    mano
                                </Text>
                                <Text color={"#fff"} fontSize={26} fontWeight="bold" fontStyle={'italic'}>
                                    fit
                                </Text>
                            </Text>
                            <Text color={"#F2F2F2"} fontSize={14} mt={5} textAlign={'center'}>Um aplicativo que não apenas o ajuda a alcançar seus objetivos de saúde, mas também o recompensa por cada passo do seu progresso. </Text>
                        </Box>
                        <Box alignItems={"center"} position={"absolute"} bottom={5} left={0} right={0} >
                            <Button  w={"80%"} borderRadius={25} bgColor={'#fff'} onPress={()=> navigation.navigate('CadastroUser')}>
                                <Text color={"#001879"} fontSize={16} fontWeight={'medium'}>Começar</Text>
                            </Button>
                            <Box flexDirection={'row'} alignItems={'center'} mt={5}>
                                <Text color={"#fff"} fontSize={13}>Já tem uma conta? {""}</Text>
                                <Link _text={{ color: '#fff',py:2}} onPress={()=> navigation.navigate('Login')} textDecoration={'none'}>Entrar</Link>
                            </Box>
                        </Box>

                    </LinearGradient>


                </Box>


            </Box>

            <Box flex={1}>
                
                <Image
                 alt="Ciclista"
                    w={"100%"}
                    source={require("../../assets/foto2.png")}
                />
                <Box
                    position={'absolute'}
                    bottom={0}
                    height={"50%"}
                    w={"100%"}

                >
                    <LinearGradient
                        colors={['#9D2929', 'rgba(0,0,0,0)']}
                        start={[0, 1]}
                        end={[0, 0]}
                        locations={[0.70, 1]}
                        style={{ flex: 1 }}
                    >
                        <Box justifyContent={'center'} alignItems={'center'} p={5} marginTop={100}>
                            <Text color={"#fff"} fontSize={26}>
                                Conquiste Recompensas

                            </Text>
                            <Text color={"#F2F2F2"} fontSize={14} mt={5} textAlign={'center'}>A busca por uma vida saudável se torna mais do que apenas um objetivo – é uma jornada emocionante cheia de conquistas e recompensas. </Text>
                        </Box>
                        <Box alignItems={"center"} position={"absolute"} bottom={5} left={0} right={0}>
                            <Button  w={"80%"} borderRadius={25} bgColor={'#fff'} onPress={()=> navigation.navigate('CadastroUser')}>
                                <Text color={"#001879"} fontSize={16} fontWeight={'medium'}>Começar</Text>
                            </Button>
                            <Box flexDirection={'row'} alignItems={'center'} mt={5}>
                                <Text color={"#fff"} fontSize={13}>Já tem uma conta? {""}</Text>
                                <Link _text={{ color: '#fff',py:2}} onPress={()=> navigation.navigate('Login')} textDecoration={'none'}>Entrar</Link>
                            </Box>
                        </Box>
                    </LinearGradient>


                </Box>


            </Box>


            <Box flex={1}>
                <Image
                 alt="Musculacao"
                    w={"100%"}
                    source={require("../../assets/foto3.png")}
                    
                />
                <Box
                    position={'absolute'}
                    bottom={0}
                    height={"50%"}
                    w={"100%"}

                >
                    <LinearGradient
                        colors={['#9D2929', 'rgba(0,0,0,0)']}
                        start={[0, 1]}
                        end={[0, 0]}
                        locations={[0.70, 1]}
                        style={{ flex: 1 }}
                    >
                        <Box justifyContent={'center'} alignItems={'center'} p={5} marginTop={100}>
                            <Text color={"#fff"} fontSize={26}>
                                Desafios e Competições
                            </Text>
                            <Text color={"#F2F2F2"} fontSize={14} mt={5} textAlign={'center'}>Participe de desafios e competições com amigos e outros usuários do manofit para manter a motivação elevada e adicionar uma dose saudável de competição ao seu regime de exercícios.</Text>
                        </Box>
                        <Box alignItems={"center"} position={"absolute"} bottom={5} left={0} right={0}>
                            <Button  w={"80%"} borderRadius={25} bgColor={'#fff'} onPress={()=> navigation.navigate('CadastroUser')}>
                                <Text color={"#001879"} fontSize={16} fontWeight={'medium'}>Começar</Text>
                            </Button>
                            <Box flexDirection={'row'} alignItems={'center'} mt={5}>
                                <Text color={"#fff"} fontSize={13}>Já tem uma conta? {""}</Text>
                                <Link _text={{ color: '#fff',py:2}} onPress={()=> navigation.navigate('Login')} textDecoration={'none'}>Entrar</Link>
                            </Box>
                        </Box>
                    </LinearGradient>

                </Box>


            </Box>

        </Swiper>
    )
}