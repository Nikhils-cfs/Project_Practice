import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styleSubmitData';

interface FormData {
  name: string;
  contact: string;
  email: string;
  password: string;
}

interface SubmitProps {
  data: FormData[];
  onDelete: (index: number) => void;
}

function SubmitData({ data, onDelete }:SubmitProps){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submitted Data</Text>
      {data.length === 0 ? (
        <Text>No Data Submitted</Text>
      ) : (
        <View>
          <View style={styles.headerRow}>
            <Text style={styles.cell}>Sr.no</Text>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>Contact</Text>
            <Text style={styles.cell}>Email</Text>
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.dataRow}>
              <Text style={styles.cell}>{index + 1}</Text>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.contact}</Text>
              <Text style={styles.cell}>{item.email}</Text>
              <Text
                style={[styles.cell, { color: 'red' }]}
                onPress={() => onDelete(index)}
              >
                Delete
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};



export default SubmitData;
