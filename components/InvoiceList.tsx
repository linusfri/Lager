import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { DataTable } from "react-native-paper";

import AuthModel from "../models/auth";
import invoiceModel from "../models/invoiceModel";
import invoice from "../interfaces/invoice";
import { Base, Typo, Forms } from '../Styles/index';

export default function InvoiceList({ route, navigation, setIsLoggedIn }:any) {
    const [invoices, setInvoices] = useState<invoice[]>([]);
    const { reload } = route.params || false;

    async function getAllInvoices() {
        setInvoices(await invoiceModel.getInvoices());
    }

    useEffect(async () => {
        getAllInvoices();
    }, []);

    if (reload) {
        getAllInvoices();
    }

    const allInvoices = invoices.map((invoice, index) => {
        return(
            <DataTable.Row key={index}>
                <DataTable.Cell>{invoice.creation_date}</DataTable.Cell>
                <DataTable.Cell>{invoice.due_date}</DataTable.Cell>
                <DataTable.Cell>{invoice.total_price}</DataTable.Cell>
                <DataTable.Cell>{invoice.order_id}</DataTable.Cell>
            </DataTable.Row>
        );
    });

    return(
        <ScrollView>
            <TouchableOpacity
                style={Base.styles.button}
                onPress={() => {
                    AuthModel.logout();
                    setIsLoggedIn(false);
                    navigation.navigate("Lager");
                }}
            >
                <Text>Logga ut</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Base.styles.button}
                onPress={() => {
                    navigation.navigate("Skapa faktura");
                }}
            >
                <Text>Fakturera order</Text>
            </TouchableOpacity>

            <Text style={Typo.styles.h2InvoiceList}>Tidigare fakturor</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Skapad datum</DataTable.Title>
                    <DataTable.Title>Förfaller</DataTable.Title>
                    <DataTable.Title>Summa Kr</DataTable.Title>
                    <DataTable.Title>OrderID</DataTable.Title>
                </DataTable.Header>
                {allInvoices}
            </DataTable>
        </ScrollView>
    );
};
