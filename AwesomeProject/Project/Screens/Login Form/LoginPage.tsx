import React, {useState} from 'react';
import {
  SafeAreaView,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './StyleLoginPage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function LoginPage(props: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true); // State to toggle secure text visibility

  function onPress() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      Alert.alert('Please fill in all fields');
    } else if (!emailRegex.test(email)) {
      setEmail('');
      Alert.alert('Invalid email format');
    } else if (password.length < 6) {
      setPassword('');
      Alert.alert('Password must be at least 6 characters');
    } else if (email !== 'nik@gmail.com' || password !== 'nik@123') {
      Alert.alert('Invalid credentials. Try again.');
    } else {
      setEmail('');
      setPassword('');
      props.navigation.navigate('Drawer Menu');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#B2CFFF', '#7CAFFF', '#4F87FF']}
        style={styles.linear}>
        <View style={styles.innerWrap}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Login to continue</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#cbd5e1"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#cbd5e1"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureText} 
              />

              <TouchableOpacity
                onPress={() => setSecureText(!secureText)}
                style={styles.eyeIcon}>
                <Icon
                  name={secureText ? 'visibility-off' : 'visibility'}
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={onPress}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Register Form')}>
              <Text style={styles.registerLink}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
