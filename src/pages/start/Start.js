import { Box} from "native-base";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import { CarrouselStart } from "../../components/carrouselstart/CarrouselStart";

export function Start() {
    return(
        <Box flex={1}>
        <CarrouselStart/>
        </Box>
    );
}
