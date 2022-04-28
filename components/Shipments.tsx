import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Base, Typo } from "../Styles/index";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShipOrder from "./ShipOrder";
import ShipmentList from "./ShipmentList";

export default function Shipments() {
    const Stack = createNativeStackNavigator();

    return(
        <View style={Base.styles.container}>
            <Stack.Navigator>
                <Stack.Screen name="Leveranslista" component={ShipmentList}></Stack.Screen>
                <Stack.Screen name="Leverera order" component={ShipOrder}></Stack.Screen>
            </Stack.Navigator>
        </View>
    );
};