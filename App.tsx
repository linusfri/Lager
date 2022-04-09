import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home";
import Pick from "./components/Pick";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
  "Plock": "list" as const
};

export default function App() {
  const [products, setProducts] = useState([]);
  return (
    <SafeAreaProvider style={styles.defaultColor}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={navTheme}>
          <Tab.Navigator screenOptions={ ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = routeIcons[route.name as keyof typeof routeIcons] || "alert";

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray"
          })}
          >
            <Tab.Screen name="Lager" options={{headerShown:false}}>
              {() => <Home products={products} setProducts={setProducts} />}
            </Tab.Screen>
            <Tab.Screen name="Plock" options={{headerShown:false}}>
              {() => <Pick setProducts={setProducts}/>}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12
  },
  defaultColor: {
    backgroundColor: '#fff',
  }
});
