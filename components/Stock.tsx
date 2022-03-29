import { Text, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import config from '../config.json';

function StockList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.url}/products?api_key=${config.api_key}`)
            .then(response => response.json())
            .then(result => setProducts(result.data));
    }, []);

    const list = products.map((product, index) => <Text key={index}>{ product.name }</Text>);

    return (
        <View>
            {list}
        </View>
    );

}

export default function Stock() {
    return (
        <View>
            <Text style={styles.text}>Lagerförteckning</Text>
            <StockList/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'rgba(0,0,0, 0.6)'
    }
});
