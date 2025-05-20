import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { styles } from './StyleWatchData';

interface Watch {
  id: string;
  brand: string;
  model: string;
  category: string;
  type: string;
  price: number;
  discount: number;
  likes: number;
  image: string;
}

const WatchList = () => {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Watches();
  }, []);

  const Watches = async () => {
    try {
      const response = await fetch('http://192.168.1.240:4000/watches');
      const data = await response.json();
      setWatches(data);
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderWatch = ({ item }: { item: Watch }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.price}>
          ${item.price.toFixed(2)}{' '}
          {item.discount > 0 && (
            <Text style={styles.discount}>({item.discount}% OFF)</Text>
          )}
        </Text>
        <Text style={styles.likes}>❤️ {item.likes}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={watches}
        renderItem={renderWatch}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default WatchList;
