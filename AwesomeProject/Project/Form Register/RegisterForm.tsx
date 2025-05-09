import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import SubmitData from './SubmitData';
import {styles} from './StyleRegisterForm';

interface FormData {
  name: string;
  contact: string;
  email: string;
  password: string;
}
function RegisterForm() {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [submitData, setSubmitData] = useState<FormData[]>([]);

  const onPress = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !contact || !email || !password || !confirmPassword) {
      Alert.alert('Please Fill in all feilds.');
      return;
    }
    if (!/^\d*$/.test(contact) || contact.length !== 10) {
        Alert.alert("Number must be 10 digits.");
        return;
      }
    if (!emailRegex.test(email)) {
      setEmail(''), Alert.alert('Invalid email format');
      return;
    }
    if (password.length < 6) {
      setConfirmPassword(''),
        Alert.alert('Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setPassword(''), Alert.alert('Password do not Match.');
      return;
    }

    const newEntry = {
      name,
      email,
      contact,
      password,
    };
    setSubmitData([...submitData, newEntry]),
      setName(''),
      setContact(''),
      setEmail(''),
      setPassword(''),
      setConfirmPassword(''),
      Alert.alert('Success', 'Registration Successfull');
  };
  const onDelete = (indextoDelete: number) =>{
    const updatedata = submitData.filter((_, index) => index !== indextoDelete);
    setSubmitData(updatedata)
  };

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#ccc'}}>
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

          <Text style={styles.text1}>Retype Password</Text>
          <TextInput
            placeholder="Retype Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.inputdata}
          />
        </View>
        <View>
          <Button title="Submit" onPress={onPress} />
        </View>

        <SubmitData data={submitData} onDelete={onDelete} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterForm;
