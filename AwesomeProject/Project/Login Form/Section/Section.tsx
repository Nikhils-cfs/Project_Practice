import React from 'react';
import { SafeAreaView, Text, View, SectionList, StatusBar} from 'react-native';
import { styles1 } from './styleSection';
const travelData = [
        {
          title: 'Beaches',
          data: ['Bora Bora', 'Maui', 'Maldives', 'Phuket'],
        },
        {
          title: 'Mountains',
          data: ['Swiss Alps', 'Rocky Mountains', 'Himalayas', 'Andes'],
        },
        {
          title: 'Cities',
          data: ['Tokyo', 'Paris', 'New York', 'Barcelona'],
        },
        {
          title: 'Deserts',
          data: ['Sahara', 'Gobi', 'Atacama', 'Thar'],
        },
      ];
      

const Section = () => (
  
    <SafeAreaView style={styles1.container} >
         <StatusBar barStyle='dark-content' />
      <SectionList
        sections={travelData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles1.item}>
            <Text style={styles1.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles1.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
 
);



export default Section;