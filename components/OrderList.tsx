import { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from "react-native";
import config from "../config/config.json";
import { Base, Typo } from "../Styles/index";
import orderModel from '../models/orderModel';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


export default function OrderList({ route, navigation }) {
    // Från Picklist
    const { reload } = route.params || false;

    const [allOrders, setAllOrders] = useState<any[]>([]);
    
    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders());
    }

    if (reload) {
        reloadOrders();
    }

    useEffect(() => {
        reloadOrders();
    }, [])

    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        navigation.navigate("Details", {
                            order: order
                        });
                    }}
                    style={Base.styles.button}
                >
                    <Text style={Typo.styles.buttonText}>{order.name}</Text>
                </TouchableOpacity>
            )
        });
    
        return (
            <View>
                <Text>Ordrar redo att plockas</Text>
                {listOfOrders}
            </View>
        )
}