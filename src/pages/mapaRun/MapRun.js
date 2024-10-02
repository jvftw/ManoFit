import React, { useEffect, useRef, useState } from 'react';
import { Box,Text } from 'native-base';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location';
import MapView, { Polyline } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { FontAwesome6 } from '@expo/vector-icons';
import * as geolib from 'geolib'; // Modificado aqui
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export function MapRun(){
    const [currentPosition, setCurrentPosition] = useState(null);
    const [previousPositions, setPreviousPositions] = useState([]);
    const [totalDistance, setTotalDistance] = useState(0);
    const [currentMarkerPosition, setCurrentMarkerPosition] = useState(null);
    const mapaRef = useRef(null);
    
    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setCurrentPosition(currentPosition);
            console.log('localizacao atual',currentPosition)
            setCurrentMarkerPosition(currentPosition.coords);
            setPreviousPositions([currentPosition.coords]); // Inicializa com a posição atual

            watchPositionAsync(
                {
                    accuracy: LocationAccuracy.Highest,
                    timeInterval: 1000,
                    distanceInterval: 1
                },
                (response) => {
                    console.log('nova localizacao do usuario', response);
                    setCurrentPosition(response);
                    setCurrentMarkerPosition(response.coords);
                    setPreviousPositions(prevPositions => [...prevPositions, response.coords]);
                    mapaRef.current?.animateCamera({
                        pitch: 70,
                        center: response.coords
                    });
                }
            );
        }
    }

  
    useEffect(() => {
        if (previousPositions.length > 1) {
            const newTotalDistance = geolib.getPathLength(previousPositions);
            setTotalDistance(newTotalDistance / 1000); // Convertendo metros para quilômetros
        }
    }, [previousPositions]);
    return(
        <Box flex={1}>
                <MapView
                    ref={mapaRef}
                    style={{ flex: 1, width: '100%' }}
                    initialRegion={{
                        latitude: currentPosition.coords.latitude,
                        longitude: currentPosition.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                >
                   
                    <Polyline
                        coordinates={previousPositions}
                        strokeWidth={5}
                        strokeColor="red"
                    />
                    <Marker
                        coordinate={currentMarkerPosition}
                    >
                        <FontAwesome6 name="location-pin" size={20} color="red" />
                    </Marker>
                    <Text>Distância total percorrida: {totalDistance.toFixed(2)} km</Text>
                </MapView>
        </Box>
    )
}