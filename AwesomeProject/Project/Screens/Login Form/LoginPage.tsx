import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Switch,
} from 'react-native';
import {styles} from './StyleLoginPage';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginPage(props:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [enabled, setEnabled] = useState(false);
  // const toggleSwitch = () => {
  //   setEnabled(previousState => !previousState);
  // };

  function onPress() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log('Pressed login button');

    if (!email || !password) {
      console.log('Missing email or password');
      Alert.alert('Please fill in all fields');
    } else if (!emailRegex.test(email)) {
      console.log('Invalid email format');
      setEmail(''), 
      Alert.alert('Invalid email format');
    } else if (password.length < 6) {
      console.log('Password too short');
      setPassword(''), 
      Alert.alert('Password must be at least 6 characters');
    } else if (email !== 'nik@gmail.com' || password !== 'nik@123') {
      console.log('Credentials incorrect');
      Alert.alert('Invalid credentials. Try again.');
    } else {
      console.log('Login successful. Attempting navigation...');
      setEmail('');
      setPassword('');
      Alert.alert('Login Successful','',[
        { text:'OK', onPress: ()=> {
          setTimeout(()=> {props.navigation.navigate('Home');},100);},}
      ]);
      ;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient
        colors={["#7C93C3",'#B1B2FF', '#EEF5FF',"#B1B2FF" ]}
        style={styles.linear}> */}
      <ImageBackground
        source={require('../../assests/BG.png')}
        style={styles.background}>
        <View style={styles.wrap}>
          <LinearGradient
            colors={['#7C93C3', '#7C93C3' ]}
            style={styles.linear}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email ID"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View style={styles.buttonstyle}>
              {/* <Switch
                trackColor={{false: '#ccc', true: 'blue'}}
                thumbColor={enabled ? 'black' : 'white'}
                onChange={toggleSwitch}
                value={enabled}
              /> 
               <Text>Dark/light</Text> */}
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.button1} onPress={onPress}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> props.navigation.navigate('Register Form')}>
                <Text style={styles.button}>Register Here</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
}
