import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './StyleProfile';

interface FormData {
  name: string;
  contact: string;
  email: string;
  password: string;
}

const Profile: React.FC = () => {
    const route = useRoute();
  const { submitData = [] } = route.params as { submitData?: FormData[] };
  const user = submitData[0]; 
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View style={styles.profileSection}>
        <FontAwesome
          name="user"
          size={100}
          color="#1e3a8a"
          style={styles.profileIcon}
        />
      </View>

      {user ? (
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{user.contact}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
        </View>
      ) : (
        <Text>No user data found.</Text>
      )}
    </View>
  );
};

export default Profile;
