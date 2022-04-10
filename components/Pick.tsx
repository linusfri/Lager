import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stock from './Stock';
import Header from './Header'
import OrderList from './OrderList';
import PickList from './Picklist';
import { Base } from '../Styles';

const Stack = createNativeStackNavigator();

export default function Pick(props) {
    return (
        <View style={Base.styles.container}>
            <Header />
            <Stack.Navigator initialRouteName="List">
                <Stack.Screen name="List" component={OrderList}></Stack.Screen>
                <Stack.Screen name="Details">
                    {(screenProps) => <PickList {...screenProps} setProducts={props.setProducts}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </View>
        
    );
}