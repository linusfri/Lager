import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Base, Typo, Forms } from '../Styles/index';
import Header from "./Header";
import AuthModel from "../models/auth";
import InvoiceList from './InvoiceList';
import CreateInvoice from "./CreateInvoice";

export default function Invoices({ setIsLoggedIn }:any) {
    const Stack = createNativeStackNavigator();
    return (
        <View style={Base.styles.container}>
            <Header/>
            <Stack.Navigator initialRouteName="Fakturalista">
                <Stack.Screen name="Fakturalista">
                    {(screenProps) => <InvoiceList {...screenProps} setIsLoggedIn={setIsLoggedIn}/>}
                </Stack.Screen>
                <Stack.Screen name="Skapa faktura">
                    {(screenProps) => <CreateInvoice {...screenProps}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </View>
    );
};
