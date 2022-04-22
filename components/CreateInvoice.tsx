import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

import { Base, Typo, Forms} from "../Styles/index";
import invoice from '../interfaces/invoice';
import DateTimePickerInvoice from "./DateTimePickerInvoice";
import OrderPicker from "./OrderPicker";
import invoiceModel from "../models/invoiceModel";
import order from "../interfaces/order";

export default function CreateInvoice({ navigation }) {
    const [invoice, setInvoice] = useState<Partial<invoice>>({});
    const [order, setOrder] = useState<Partial<order>>({});

    async function createInvoice() {
        if (!order.id || !order.name || !invoice.creation_date || !invoice.due_date) {
            alert("Du måste fylla i all information.");
            return;
        }
        await invoiceModel.createInvoice(order, invoice);
    }
    return (
        <ScrollView contentContainerStyle={Base.styles.scrollView}>
            <Text style={Typo.styles.label}>Förfallodatum</Text>
            <DateTimePickerInvoice 
                setInvoice={setInvoice}
                invoice={invoice}
            />

            <Text style={Typo.styles.label}>Order</Text>
            <OrderPicker
                setInvoice={setInvoice}
                invoice={invoice}
                setOrder={setOrder}
            />
            <TouchableOpacity 
                style={Base.styles.button} 
                onPress={() => {
                    createInvoice();
                    navigation.navigate("Fakturalista", { reload:true });
                }}
            >
                <Text style={Typo.styles.buttonText}>Skapa faktura</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};