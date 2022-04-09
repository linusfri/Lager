import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stock from './Stock';
import parcel from '../assets/parcel.png';

export default function Header() {
    return (
        <View style={styles.base}>
            <Text style={styles.titleText}>StockApp</Text>
            <Image source={parcel} style ={styles.mainImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      marginTop: 12
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