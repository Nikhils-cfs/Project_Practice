import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { styles } from '../Home Screen/CartStyle';

interface Watch {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: any;
}

interface Props {
  cart: Watch[];
  setCart: React.Dispatch<React.SetStateAction<Watch[]>>;
}

const CartScreen: React.FC<Props> = ({ cart, setCart }) => {
  //   const initialCart = route.params?.cart || [];
  // const [cart, setCart] = useState<Watch[]>(route.params?.cart || []);

  const removeFromCart = (indexToRemove: number) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
    Alert.alert('Item removed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <View style={styles.scrollContainer}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cart.map((item: any, index: number) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity
                onPress={() => removeFromCart(index)}
                style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
