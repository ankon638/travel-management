import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '90vw',
    height: '70vh'
};

const center = {
    lat: 23.877062365181583,
    lng: 90.32014846769657
};

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >

            {/* Google Map  */}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
            >
                <Marker
                    position={center}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)