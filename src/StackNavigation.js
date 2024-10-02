import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Start } from './pages/start/Start';
import { Login } from "./pages/login/Login";
import { CadastroUser } from "./pages/cadastrouser/CadastroUser";
import {AccountSettings} from "./pages/accountSettings/AccountSettings";
import { BottomNavigation } from "./components/bottomMenu/BottomNavigation";
import { Rewards } from "./pages/rewards/Rewards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Spinner } from "native-base";
import { StartRun } from "./pages/startRun/StartRun";
import { Home } from "./pages/home/Home";
import { ChangeAccount } from "./pages/changeAccount/ChangeAccount";
import { ChangePassword } from "./pages/changePassword/ChangePassword";

const Stack = createStackNavigator();

export function StackNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await AsyncStorage.getItem("logado");
        if (value === "true") {
          setIsLoggedIn(true);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    isLoading ? (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" color="emerald.500" />
      </Box>
    ) : (
      <Stack.Navigator initialRouteName={isLoggedIn ? 'BottomNavigation' : 'Start'}>
        <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="CadastroUser" component={CadastroUser} />
        <Stack.Screen options={{ headerShown: false }} name="AccountSettings" component={AccountSettings} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Rewards" component={Rewards} />
        <Stack.Screen options={{headerShown:false}} name="ChangeAccount" component={ChangeAccount}/>
        <Stack.Screen options={{headerShown:false}} name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
          name="BottomNavigation"
          component={BottomNavigation}
        />
      <Stack.Screen options={{ headerShown: false}} name="StartRun" component={StartRun} />
      </Stack.Navigator>
    )
  );
}
