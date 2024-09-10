import { useState, useEffect } from 'react';

interface LocationState {
    loaded: boolean;
    coordinates: { lat: number; lng: number; };
}

interface UseCurrentLocation {
    location: LocationState;
    error: string;
}

const useCurrentLocation = (): UseCurrentLocation => {
    const [location, setLocation] = useState<LocationState>({
        loaded: false,
        coordinates: { lat: 0, lng: 0 },
    });
    const [error, setError] = useState<string>("");

    const onSuccess = (location: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error: GeolocationPositionError) => {
        setError(error.message);
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return { location, error };
};

export default useCurrentLocation;
