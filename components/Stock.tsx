import { Text, StyleSheet, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import config from '../config.json';

function StockList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.url}/products?api_key=${config.api_key}`)
            .then(response => response.json())
            .then(result => setProducts(result.data));
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

export default function Stock() {
    return (
        <View>
            <Text style={styles.text}>Lagerförteckning</Text>
            <StockList />
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
        flexDirection: 'row',
        alignItems: 'center'
    },
    productItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        marginVertical: 5,
        marginHorizontal: 5,
        height: 50,
    },
    container: {

    }
});
