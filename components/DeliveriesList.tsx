import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from 'react';

import deliveryModel from '../models/deliveryModel';
import productModel from "../models/productModel";
import delivery from "../interfaces/delivery";
import { Base, Typo } from "../Styles/index";

export default function DeliveriesList({ route, navigation }) {
    const [deliveries, setDeliveries] = useState<any>([]);
    const { reload } = route.params || false;

    async function getAllDeliveries() {
        setDeliveries(await deliveryModel.getAllDeliveries());
    }

    if (reload) {
        getAllDeliveries();
    }

    useEffect(() => {
        getAllDeliveries();
    }, []);

    const listOfDeliveries = deliveries.map((delivery:delivery, index:number) => {
        return (
            <View key={index} style={Base.styles.deliveryItem}>
                <Text style={Typo.styles.deliveryItemText}>Inleveransdatum: {delivery.delivery_date}</Text>
                <Text style={Typo.styles.deliveryItemText}>Kommentar: {delivery.comment}</Text>
                <Text style={Typo.styles.deliveryItemText}>Produkt: {delivery.product_name}</Text>
                <Text style={Typo.styles.deliveryItemText}>Antal: {delivery.amount}</Text>
            </View>
        )
    })

    return (
        <ScrollView>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("Form");
                }}
                style={Base.styles.button}
            >
                <Text style={Typo.styles.buttonText}>Skapa ny inleverans</Text>
            </TouchableOpacity>
            {listOfDeliveries}
        </ScrollView>
    );
}
