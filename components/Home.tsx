import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stock from './Stock';
import Header from './Header';


export default function Home({products, setProducts}) {
  return (
    <SafeAreaProvider>
       <SafeAreaView style={styles.container}>
          <Header />
        <View style={styles.baseColumn}>
          <Stock products={products} setProducts={setProducts} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  base: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 12
  },

  baseColumn: {
    flex: 1,
    marginTop: 12,
  },

  titleText: {
    color: 'rgba(0,0,0, 0.4)',
    fontSize: 42,
  },

  mainImage: {
    height: 75, 
    width: 75, 
    resizeMode:'stretch'
  }
});