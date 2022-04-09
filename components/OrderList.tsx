import { useState, useEffect } from 'react';
import { View, Text, Button } from "react-native";
import config from "../config/config.json";
import orderModel from '../models/orders';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Details: {order: object}
}

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function OrderList({ route, navigation }) {
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
            return <Button
                title={order.name}
                key={index}
                onPress={() => {
                    navigation.navigate("Details", {
                        order: order
                    });
                }}
            />
        });
    
        return (
            <View>
                <Text>Ordrar redo att plockas</Text>
                {listOfOrders}
            </View>
        )
}