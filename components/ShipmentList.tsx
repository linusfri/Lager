import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { Base, Typo } from "../Styles/index";

import order from "../interfaces/order";
import orderModel from "../models/orderModel";

export default function ShipmentList({ route, navigation }) {
    const [orders, setOrders] = useState<order[]>()

    const { reload } = route.params || false;

    async function getOrders() {
        setOrders(await orderModel.getOrders());
    }
    useEffect( async () => {
        getOrders();
    }, []);

    if (reload) {
        getOrders();
    }

    const pickedOrders = orders?.filter(order => order.status === "Packad")
        .map((order, index) => {
            return(
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        navigation.navigate("Leverera order", {order: order})
                    }}
                    style={Base.styles.button}
                >
                    <Text style={Typo.styles.buttonText}>{order.name}</Text>
                </TouchableOpacity>
            );
        });

    return(
        <ScrollView>
            {pickedOrders}
        </ScrollView>
    );
};