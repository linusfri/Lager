import { View, Text, Button } from "react-native";
import orderModel from "../models/orderModel";
import { useState, useEffect } from 'react';
import productModel from "../models/productModel";
import order from "../interfaces/order";

export default function PickList ({ route, navigation, setProducts }) {
    const { order } = route.params;

    async function pick() {
        await orderModel.pickOrder(order);
        setProducts(await productModel.getProducts());
        navigation.navigate("List", {reload: true});
    }

    function isOutOfStock() {
        for (const item of order.order_items) {
            if (item.amount > item.stock) {
                return true;
            }
        }
        return false;
    }

    function isEmptyOrder() {
        if (!order.order_items.length) {
            return true;
        }
        return false;
    }

    const orderItemsList = order.order_items.map((item, index:number) => {
        return <Text key={index}>
            {item.name} - {item.amount} - {item.location}
        </Text>;
    });

    return (
        <View>
            <Text>{order.name}</Text>
            <Text>{order.id}</Text>
            <Text>{order.adress}</Text>
            <Text>{order.zip} {order.city}</Text>

            <Text>Produkter:</Text>
            {orderItemsList}
            <Button
                title="Packa order" onPress={pick}
                disabled={isOutOfStock() || isEmptyOrder() || order.status === "Packad"}
            />
        </View>
    )
}