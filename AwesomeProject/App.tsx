import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginPage from './Project/Screens/Login Form/LoginPage';
import RegisterForm from './Project/Screens/Form Register/RegisterForm';
import HomePage from './Project/Screens/Home Screen/HomePage';
import CartScreen from './Project/Screens/Home Screen/CartScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


interface Watch {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: any; 
}

function BottomTabs() {
  const [cart, setCart] = useState<Watch[]>([]); 
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{headerShown:false}}>
        {() => <HomePage cart ={cart} setCart={setCart} />}
      </Tab.Screen>
      <Tab.Screen name="Cart" options={{headerShown:false}}>
        {() => <CartScreen cart={cart} setCart={setCart} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage}  options={{headerShown:false}}/>
        <Stack.Screen name="Register Form" component={RegisterForm} />
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
