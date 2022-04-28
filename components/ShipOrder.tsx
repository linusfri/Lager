import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Base, Typo } from "../Styles/index";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import getCoordinates from "../models/nominatim";
import coordinates from "../interfaces/coordinates";
import orderModel from "../models/orderModel";
import { addListener } from 'expo-updates';

export default function ShipOrder({ route, navigation }) {
    const { order } = route.params;
    const [customerMarker, setCustomerMarker] = useState<any>(null);
    const [customerCoordinates, setCustomerCoordinates] = useState <coordinates>({longitude:0, latitude: 0});
    const [userMarker, setUserMarker] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function getCustomerLocation() {
        const results = await getCoordinates(`${order.address}, ${order.city}`);
        setCustomerMarker(<Marker
            coordinate={
                {latitude: parseFloat(results[0].lat), longitude: parseFloat(results[0].lon)}
            }
            title={results[0].display_name}
        />);
        
        setCustomerCoordinates({
            latitude: parseFloat(results[0].lat), 
            longitude: parseFloat(results[0].lon)
        });
    }

    async function getUserLocation() {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status != "granted") {
            setErrorMessage("Permissions to access location was denied");
            return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});

        setUserMarker(<Marker
            coordinate={{
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude
            }}
            title={"My location"}
            pinColor={"blue"}
        />);
    }

    useEffect(async () => {
        getCustomerLocation();
        getUserLocation();
    }, []);

    return(
        <View style={Base.styles.container}>
                <MapView
                    style={Base.styles.map}
                    region={{
                        latitude: customerCoordinates.latitude,
                        longitude: customerCoordinates.longitude,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}>
                    {customerMarker}
                    {userMarker}
                </MapView>
            <View>
                <Text style={Typo.styles.h2}>Orderdetaljer</Text>
                <Text style={Typo.styles.h3}>Namn: {order.name}</Text>
                <Text style={Typo.styles.h3}>ID: {order.id}</Text>
                <Text style={Typo.styles.h3}>Adress: {order.address}, {order.city}</Text>
                <Text style={Typo.styles.h3}>Postnummer: {order.zip}</Text>
                <Text style={Typo.styles.h3}>Land: {order.country}</Text>
                <Text style={Typo.styles.h3}>Orderstatus: {order.status}</Text>

                <TouchableOpacity
                    style={Base.styles.button}
                    onPress={() => {
                        orderModel.setOrderStatus(order, 400);
                        alert("Order skickad!");
                        navigation.navigate("Leveranslista", {reload: true})
                    }}
                >
                    <Text style={Typo.styles.buttonText}>Skicka order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};