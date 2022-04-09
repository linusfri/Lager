import { Text, StyleSheet, View, FlatList, ScrollView, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import config from '../config/config.json';
import productModel from '../models/products';

function StockList({products, setProducts}) {
    useEffect( async () => {
        setProducts(await productModel.getProducts());
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={3}
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={ ({ item }) => (
                    <View style={styles.productGrid}>
                        <View style={styles.productItem}>
                            <Text>{item.name}</Text>
                            <Text>I lager: {item.stock}</Text>
                        </View> 
                    </View>
                )}
            />
        </View>
    );
}

export default function Stock({products, setProducts}) {
    return (
        <View>
            <Text style={styles.text}>Lagerförteckning</Text>
            <StockList products={products} setProducts={setProducts} />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'rgba(0,0,0, 0.6)'
    },
    productGrid: {
        flex: 1,
        flexDirection: 'row'
    },
    productItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        marginVertical: 5,
        marginHorizontal: 5,
        height: 80,
    },
    container: {
        // flex:1
    }
});
