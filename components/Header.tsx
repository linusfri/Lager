import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stock from './Stock';
import parcel from '../assets/parcel.png';
import {Base, Typo} from "../Styles/index"

export default function Header() {
    return (
        <View style={Base.styles.base}>
            <Text style={Typo.styles.h1}>StockApp</Text>
            <Image source={parcel} style ={Base.styles.mainImage}/>
        </View>
    );
}