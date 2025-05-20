import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './StyleAbout';

const About: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.heading}>About Timly</Text>
        <Text style={styles.intro}>Discover the Art of Timekeeping</Text>

        <Text style={styles.paragraph}>
          Welcome to <Text style={styles.bold}>Timly</Text>, your ultimate
          destination for everything about watches — from timeless classics to
          the latest trends. Whether you're a passionate collector, a curious
          enthusiast, or someone who simply appreciates the craftsmanship of a
          fine timepiece, you're in the right place.
        </Text>

        <Text style={styles.paragraph}>
          At Timly, we believe that watches are more than just tools for telling
          time — they’re a blend of style, innovation, and heritage. Our
          platform is dedicated to celebrating horology in all its forms.
        </Text>

        <Text style={styles.subheading}>What You’ll Find on Timly</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • In-Depth Watch Reviews – Honest, detailed insights on iconic and
            modern timepieces.
          </Text>
          <Text style={styles.listItem}>
            • Buying Guides & Comparisons – Helping you choose the right watch
            for your style and budget.
          </Text>
          <Text style={styles.listItem}>
            • Latest Watch News – Stay updated with new releases from top
            brands.
          </Text>
          <Text style={styles.listItem}>
            • Care Tips & Tutorials – Learn how to maintain and care for your
            watch.
          </Text>
          <Text style={styles.listItem}>
            • Community Stories – Discover real stories and collections from
            fellow watch lovers.
          </Text>
        </View>

        <Text style={styles.subheading}>Why We Created Timly</Text>
        <Text style={styles.paragraph}>
          We started Timly with a mission: to create a space where the love for
          watches and horology can thrive. From vintage masterpieces to
          futuristic designs, we aim to provide a platform where time meets
          passion.
        </Text>

        <Text style={styles.paragraph}>
          Join us on this journey through time. ⌚
        </Text>
        <Text style={styles.close}>____________________</Text>
      </View>
    </ScrollView>
  );
};

export default About;
