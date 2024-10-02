import React, { createContext, useState, useContext, useEffect } from 'react';
import { LocationAccuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

const MapContext = createContext();

export const useMapContext = () => {
    return useContext(MapContext);
};

export const MapProvider = ({ children }) => {
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [location, setLocation] = useState(null);


    const requestLocationPermissions = async () => {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
            setPermissionGranted(true);
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition.coords);
            console.log('Localização:', currentPosition.coords);
        }
    };
    useEffect(() => {
        requestLocationPermissions();
    }, []);

    return (
        <MapContext.Provider value={{ permissionGranted, location}}>
            {children}
        </MapContext.Provider>
    );
};
