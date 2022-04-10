import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stock from './Stock';
import Header from './Header';
import { Base } from '../Styles';


export default function Home({products, setProducts}) {
  return (
    <SafeAreaProvider>
       <SafeAreaView style={Base.styles.container}>
          <Header />
        <View style={Base.styles.baseColumn}>
          <Stock products={products} setProducts={setProducts} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}