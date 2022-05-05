import { Text, StyleSheet, View, FlatList, ScrollView, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import productModel from '../models/productModel';
import {Base, Typo} from '../Styles/index';

export default function StockList({products, setProducts}) {
    useEffect( async () => {
        setProducts(await productModel.getProducts());
    }, []);

    return (
        <View>
            <FlatList
                numColumns={3}
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={ ({ item }) => (
                    <View style={Base.styles.productGrid}>
                        <View style={Base.styles.productItem}>
                            <Text style={Typo.styles.buttonText}>{item.name}</Text>
                            <Text style={Typo.styles.buttonText}>I lager: {item.stock}</Text>
                        </View> 
                    </View>
                )}
            />
        </View>
    );
}