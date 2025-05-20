import React, {useState} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginPage from './Project/Screens/Login Form/LoginPage';
import RegisterForm from './Project/Screens/Form Register/RegisterForm';
import HomePage from './Project/Screens/Home Screen/HomePage';
import CartScreen from './Project/Screens/Home Screen/CartScreen';
import About from './Project/Screens/About/About';

import CustomDrawer from './Project/Screens/Drawer/CustomDrawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./Project/assests/Images/Icons/Home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#000' : 'darkblue',
              }}
            />
          ),
        }}>
        {() => <HomePage cart={cart} setCart={setCart} />}
      </Tab.Screen>

      <Tab.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {cart.length > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 7,
                    left: -12,
                    backgroundColor: '#ddd',
                    borderRadius: 12,
                    paddingHorizontal: 5,
                    minWidth: 22,
                    height: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                  }}>
                  <Text
                    style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>
                    {cart.length}
                  </Text>
                </View>
              )}

              <Image
                source={require('./Project/assests/Images/Icons/Cart.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#1e3a8a' : 'black',
                }}
              />
            </View>
          ),
        }}>
        {() => <CartScreen cart={cart} setCart={setCart} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function DrawerMenu() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabs} />

      <Drawer.Screen name="About" component={About} />

      <Drawer.Screen
        name="Logout"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register Form" component={RegisterForm} />
        <Stack.Screen name="Drawer Menu" component={DrawerMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
