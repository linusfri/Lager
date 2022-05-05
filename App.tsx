import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FlashMessage from 'react-native-flash-message'; 

import {Base, Typo} from './Styles/index';
import Home from "./components/Home";
import Pick from "./components/Pick";
import Deliveries from './components/Deliveries';
import authModel from "./models/auth";
import Auth from "./components/auth/Auth";
import Invoices from './components/Invoices';
import Shipments from './components/Shipments';

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

const routeIcons = {
  "Lager": "home" as const,
  "Plock": "list" as const,
  "Inleveranslista": "md-logo-dropbox" as const,
  "Faktura": "wallet-outline" as const,
  "Logga in": "log-in-outline" as const,
  "Leveranser": "arrow-forward-outline" as const
};

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  useEffect(async () => {
    setIsLoggedIn(await authModel.loggedIn())
  }, []);

  return (
    <SafeAreaProvider style={Base.styles.defaultColor}>
      <SafeAreaView style={Base.styles.appMainContainer}>
        <NavigationContainer theme={navTheme}>
          <Tab.Navigator screenOptions={ ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = routeIcons[route.name as keyof typeof routeIcons] || "alert";

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray"
          })}
            initialRouteName="Lager"
          >
            { isLoggedIn ?
            <Tab.Screen name="Faktura" options={{headerShown:false}}>
              { () => <Invoices setIsLoggedIn={setIsLoggedIn} /> }
            </Tab.Screen> :

            <Tab.Screen name="Logga in" options={{headerShown:false}}>
              { () => <Auth setIsLoggedIn={setIsLoggedIn} />}
            </Tab.Screen>
            }

            <Tab.Screen name="Lager" options={{headerShown:false}}>
              {() => <Home products={products} setProducts={setProducts} />}
            </Tab.Screen>
            <Tab.Screen name="Plock" options={{headerShown:false}}>
              {() => <Pick setProducts={setProducts}/>}
            </Tab.Screen>
            <Tab.Screen name="Inleveranslista" options={{headerShown:false}}>
              {() => <Deliveries setProducts={setProducts}/>}
            </Tab.Screen>
            <Tab.Screen name="Leveranser" component={Shipments} options={{headerShown:false}}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
        <FlashMessage position="top"/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};