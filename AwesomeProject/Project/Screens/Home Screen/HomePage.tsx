import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { styles } from './StyleHome';


const watches:Watch[] = [
  {
    id: 1,
    name: 'Rolex Submariner',
    category: 'Luxury',
    description: 'A premium luxury watch known for its durability and style.',
    price: '$8,500',
    image: require('../../assests/Images/watchImages/image1.png'),
  },
  {
    id: 2,
    name: 'Omega Seamaster',
    category: 'Luxury',
    description: 'Famous diving watch with a bold design.',
    price: '$6,200',
    image: require('../../assests/Images/watchImages/image2.png'),
  },
  {
    id: 3,
    name: 'Casio G-Shock',
    category: 'Casual',
    description: 'Durable and affordable digital watch.',
    price: '$100',
    image: require('../../assests/Images/watchImages/image3.png'),
  },
  {
    id: 4,
    name: 'Tag Heuer Carrera',
    category: 'Sport',
    description: 'Sporty, high-performance watch for racing enthusiasts.',
    price: '$3,500',
    image: require('../../assests/Images/watchImages/image4.png'),
  },
  {
    id: 5,
    name: 'Apple Watch Series 7',
    category: 'Smartwatch',
    description: 'A smartwatch that blends technology with style.',
    price: '$399',
    image: require('../../assests/Images/watchImages/image5.png'),
  },
  {
    id: 6,
    name: 'Seiko Presage',
    category: 'Dress',
    description: 'Elegant mechanical watch with a classic design.',
    price: '$450',
    image: require('../../assests/Images/watchImages/image6.png')
  },
  {
    id: 7,
    name: 'Fossil Hybrid HR',
    category: 'Smartwatch',
    description: 'Hybrid smartwatch with fitness tracking.',
    price: '$175',
    image: require('../../assests/Images/watchImages/image7.png'),
  },
  {
    id: 8,
    name: 'Citizen Eco-Drive',
    category: 'Casual',
    description: 'Eco-friendly solar-powered watch.',
    price: '$150',
    image: require('../../assests/Images/watchImages/image8.png'),
  },
  {
    id: 9,
    name: 'Patek Philippe Nautilus',
    category: 'Luxury',
    description: 'Iconic luxury watch with timeless appeal.',
    price: '$40,000',
    image: require('../../assests/Images/watchImages/image9.png'),
  },
  {
    id: 10,
    name: 'Tissot T-Touch',
    category: 'Sport',
    description: 'Smartwatch with tactile touch interface.',
    price: '$650',
    image: require('../../assests/Images/watchImages/image10.png'),
  },
];

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

const HomePage: React.FC<Props> = ({ cart, setCart }) => {
  // const [cart, setCart] = useState<typeof watches>([]);

  const addToCart = (watch:  Watch) => {
    setCart([...cart, watch]);
   
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {watches.map(watch => (
          <View key={watch.id} style={styles.card}>
            <View style={styles.imagebg}>
            <Image
              source={watch.image}
              style={styles.image}
              resizeMode="contain"
            /></View>
            <Text style={styles.title}>{watch.name}</Text>
            <Text style={styles.category}>{watch.category}</Text>
            <Text style={styles.description}>{watch.description}</Text>
            <Text style={styles.price}>{watch.price}</Text>

            <View style={styles.addtocart}>
              <TouchableOpacity
                onPress={() => addToCart(watch)}
                style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomePage;
