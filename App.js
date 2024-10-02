import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { StackNavigation } from "./src/StackNavigation";
import { MapProvider } from "./src/context/MapContext";


export default function App() {
  return (
    <NativeBaseProvider>
      <MapProvider>
        <NavigationContainer>
          <StackNavigation/>
        </NavigationContainer>
      </MapProvider>
    </NativeBaseProvider>
  );
}
