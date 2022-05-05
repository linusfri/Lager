import { Text, StyleSheet, View, FlatList, ScrollView, Platform } from 'react-native';
import { useState, useEffect } from 'react';

import config from '../config/config.json';
import productModel from '../models/productModel';
import {Base, Typo} from '../Styles/index';
import StockList from './Stocklist';


export default function Stock({products, setProducts}) {
    return (
        <View>
            <Text style={Typo.styles.h2}>Lagerförteckning</Text>
            <StockList products={products} setProducts={setProducts} />
        </View>
    );
}
