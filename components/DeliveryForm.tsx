import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { Base, Typo, Forms } from '../Styles';

import Delivery from "../interfaces/delivery";
import deliveryModel from '../models/deliveryModel';
import productModel from '../models/productModel';
import Product from "../interfaces/product";
import ProductDropDown from "./ProductDropDown";
import DateTimePicker from "./DateTimePicker";

export default function DeliveryForm ({ navigation, setProducts }) {
    const [delivery, setDelivery] = useState<Partial<Delivery>>({});
    const [currentProduct, setCurrentProduct] = useState<Partial<Product>>();
    const [deliveryButtonText, setDeliveryButtonText] = useState<string>("Gör inleverans");
    const [deliveryButtonDisabled, setDeliveryButtonDisabled] = useState<boolean>(false);

    async function addDelivery() {
        await deliveryModel.addDelivery(delivery);

        const updatedProduct = {
            ...currentProduct,
            stock: (currentProduct?.stock || 0) + (delivery.amount || 0)
        };

        await productModel.updateProduct(updatedProduct);

        setProducts(await productModel.getProducts());
        navigation.navigate("List", { reload:true });
    }

    return (
        <ScrollView contentContainerStyle={Base.styles.scrollView}>
            <Text style={Typo.styles.h2}>Ny inleverans</Text>

            <Text style={Typo.styles.label}>Kommentar</Text>
            <TextInput
                style={Forms.styles.input}
                onChangeText={(content:string) => {
                    setDelivery({...delivery, comment: content})
                }}
                value={delivery?.comment || ""}
            />

            <Text style={Typo.styles.label}>Antal</Text>
            <TextInput
                style={Forms.styles.input}
                onChangeText={(content:string) => {
                    setDelivery({...delivery, amount:parseInt(content) || 0})
                }}
                value={delivery?.amount?.toString() || "0"}
                keyboardType="numeric"
            />

            <Text style={Typo.styles.label}>Produkt</Text>
            <ProductDropDown
                delivery={delivery}
                setDelivery={setDelivery}
                setCurrentProduct={setCurrentProduct}
                style={Base.styles.picker}
            />
            
            <Text style={Typo.styles.label}>Datum</Text>
            <DateTimePicker 
                delivery={delivery}
                setDelivery={setDelivery}
            />
            
            <TouchableOpacity
                onPress={() => {
                    setDeliveryButtonDisabled(true);
                    setDeliveryButtonText("Jobbar...")
                    addDelivery();
                }}
                disabled={deliveryButtonDisabled}
                style={Base.styles.button}
            >
                <Text style={Typo.styles.buttonText}>{deliveryButtonText}</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}