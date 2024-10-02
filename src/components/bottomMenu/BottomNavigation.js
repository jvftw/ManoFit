import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../pages/home/Home";
import { Missoes } from "../../pages/missoes/Missoes";


const Tab = createBottomTabNavigator();

export function BottomNavigation(){
    
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Missoes" component={Missoes}/>
    
        </Tab.Navigator>
    )
}