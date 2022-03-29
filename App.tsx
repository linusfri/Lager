import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stock from './components/Stock.tsx';
import parcel from './assets/parcel.png';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={styles.titleText}>StockApp</Text>
        <Image source={parcel} style ={styles.mainImage}/>
        <StatusBar style="auto" />
      </View>
      <View style={styles.baseColumn}>
        <Stock />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12
  },
  base: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
