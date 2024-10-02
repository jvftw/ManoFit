import { Box, Text } from "native-base";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export function Missoes(){
    return(
        <Box safeArea>
            <Text>Missoes</Text>
        </Box>
    )
}