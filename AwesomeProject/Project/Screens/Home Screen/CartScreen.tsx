import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {styles} from '../Home Screen/CartStyle';

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

const CartScreen: React.FC<Props> = ({cart, setCart}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [showmore, setShowmore] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    const newSet = new Set(showmore);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setShowmore(newSet);
  };

  const toggleSelect = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter(i => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const removeFromCart = (indexToRemove: number) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
    Alert.alert('Removed from cart');
  };

  const renderRightActions = (index: number) => (
    <TouchableOpacity
      onPress={() => removeFromCart(index)}
      style={styles.swipeDelete}>
      <Text style={styles.removeButtonText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart ({cart.length})</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={true}>
          {cart.map((item, index) => (
            <Swipeable
              key={index}
              renderRightActions={() => renderRightActions(index)}>
              <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>

                  <TouchableOpacity onPress={() => toggleExpand(index)}>
                    <Text style={{color: '#60B5FF'}}>
                      {showmore.has(index) ? 'Show Less' : 'Know More...'}
                    </Text>
                  </TouchableOpacity>

                  {showmore.has(index) && (
                    <View>
                      <Text style={styles.category}>{item.category}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                    </View>
                  )}
                </View>
              </View>
            </Swipeable>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default CartScreen;
