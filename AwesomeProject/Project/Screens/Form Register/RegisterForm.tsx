// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   Button,
//   Alert,
// } from 'react-native';
// import SubmitData from './SubmitData';
// import {styles} from './StyleRegisterForm';
// import Profile from '../Profile/Profile';

// interface FormData {
//   name: string;
//   contact: string;
//   email: string;
//   password: string;
// }
// function RegisterForm({ navigation }: any) {
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [submitData, setSubmitData] = useState<FormData[]>([]);

//   const onPress = () => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!name || !contact || !email || !password || !confirmPassword) {
//     Alert.alert('Please Fill in all fields.');
//     return;
//   }

//   if (!/^\d*$/.test(contact) || contact.length !== 10) {
//     Alert.alert('Number must be 10 digits.');
//     return;
//   }

//   if (!emailRegex.test(email)) {
//     setEmail('');
//     Alert.alert('Invalid email format');
//     return;
//   }

//   if (password.length < 6) {
//     setConfirmPassword('');
//     Alert.alert('Password must be at least 6 characters');
//     return;
//   }

//   if (password !== confirmPassword) {
//     setPassword('');
//     Alert.alert('Passwords do not match.');
//     return;
//   }

//   const newEntry = { name, email, contact, password };
//   const updatedData = [...submitData, newEntry];
//   setSubmitData(updatedData);

//   setName('');
//   setContact('');
//   setEmail('');
//   setPassword('');
//   setConfirmPassword('');

//   console.warn('Success', 'Registration Successful');

//   navigation.navigate('Profile', {
//     submitData: [
//       {
//         name: 'Nik Shinde',
//         contact: '+91 12345 67849',
//         email: 'nik@example.com',
//         password: 'nik@123',
//       },
//     ],
//   });

// };

//   return (
//     <SafeAreaView style={{flex: 1,backgroundColor:'#ccc'}}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.headtext}>Registration Form</Text>

//         <View style={styles.formdata}>
//           <Text style={styles.text1}>Enter Your Name</Text>
//           <TextInput
//             placeholder="Enter Your Full Name"
//             value={name}
//             onChangeText={setName}
//             style={styles.inputdata}
//           />

//           <Text style={styles.text1}>Enter Contact Number</Text>
//           <TextInput
//             placeholder="Enter Your Contact Number"
//             value={contact}
//             maxLength={10}
//             onChangeText={setContact}
//             keyboardType="phone-pad"
//             style={styles.inputdata}
//           />

//           <Text style={styles.text1}>Enter Email</Text>
//           <TextInput
//             placeholder="Enter Your Email"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={setEmail}
//             style={styles.inputdata}
//           />

//           <Text style={styles.text1}>Set Password</Text>
//           <TextInput
//             placeholder="Enter Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             style={styles.inputdata}
//           />

//           <Text style={styles.text1}>Confirm Password</Text>
//           <TextInput
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//             secureTextEntry
//             style={styles.inputdata}
//           />
//         </View>
//         <View>
//           <Button title="Submit" onPress={onPress} />
//         </View>

//         <SubmitData data={submitData} onDelete={onDelete} />
//         <Profile data={submitData}/>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default RegisterForm;


import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView, Button, Alert } from 'react-native';
import { styles } from './StyleRegisterForm';

interface FormData {
  name: string;
  contact: string;
  email: string;
  password: string;
}

function RegisterForm({ navigation }: any) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onPress = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !contact || !email || !password || !confirmPassword) {
      Alert.alert('Please fill in all fields.');
      return;
    }

    if (!/^\d*$/.test(contact) || contact.length !== 10) {
      Alert.alert('Number must be 10 digits.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Invalid email format');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match.');
      return;
    }

    const hardcodedUserData = [
      {
        name: 'Nik Shinde',
        contact: '+91 12345 67849',
        email: 'nik@example.com',
        password: 'nik@123',
      },
    ];

    // Navigate to Profile and pass data
    navigation.navigate('Profile', {
      submitData: hardcodedUserData, // Pass the hardcoded data as a parameter
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ccc' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headtext}>Registration Form</Text>

        <View style={styles.formdata}>
          <Text style={styles.text1}>Enter Your Name</Text>
          <TextInput
            placeholder="Enter Your Full Name"
            value={name}
            onChangeText={setName}
            style={styles.inputdata}
          />

          <Text style={styles.text1}>Enter Contact Number</Text>
          <TextInput
            placeholder="Enter Your Contact Number"
            value={contact}
            maxLength={10}
            onChangeText={setContact}
            keyboardType="phone-pad"
            style={styles.inputdata}
          />

          <Text style={styles.text1}>Enter Email</Text>
          <TextInput
            placeholder="Enter Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={styles.inputdata}
          />

          <Text style={styles.text1}>Set Password</Text>
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputdata}
          />

          <Text style={styles.text1}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.inputdata}
          />
        </View>

        <Button title="Submit" onPress={onPress} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterForm;
