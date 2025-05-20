import React from 'react';
import {View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './StyleDrawer';

const CustomDrawer = (props: any) => {
  const username = 'Nik Shinde';

  return (
    <DrawerContentScrollView contentContainerStyle={{flex: 1,backgroundColor:'#9FB3DF'}} {...props}>
      <View style={styles.profileSection}>
        <FontAwesome name="user-circle" size={70} color="#333" />
        <Text style={styles.username}>{username}</Text>
      </View>

      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
