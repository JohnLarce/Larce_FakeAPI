import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, ImageBackground, Alert, View, StyleSheet } from 'react-native';
import { loginStyle } from '../style/MainStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';  

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setConfirmPassword] = useState('');

  const MIN_USERNAME_LENGTH = 5;
  const MIN_PASSWORD_LENGTH = 8;

  const saveUserData = async (user) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(user));
      console.log('User data saved successfully!');
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  };

  const handleRegister = async () => {
    if (username.length < MIN_USERNAME_LENGTH) {
      Alert.alert('Error', `Username must be at least ${MIN_USERNAME_LENGTH} characters long!`);
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      Alert.alert('Error', `Password must be at least ${MIN_PASSWORD_LENGTH} characters long!`);
      return;
    }

    const passwordRegex = /^[A-Za-z0-9@]*$/;
    if (!passwordRegex.test(password)) {
      Alert.alert('Error', 'Password can only contain letters, numbers, and @!');
      return;
    }

    if (password !== cpassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    const user = {
      username,
      password,
    };

    await saveUserData(user);

    console.log('Username:', username);
    console.log('Password:', password);

    Alert.alert('Success', 'Registration Successful!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('LoginScreen'),
      },
    ]);
  };

  return (
    <ImageBackground
      source={require('../assets/bape.jpg')}
      style={loginStyle.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        <Text style={[loginStyle.formHeader, { color: 'white' }]}>A Bathing Ape</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={[loginStyle.input, { color: 'white' }]}
          placeholder="Enter your username"
          placeholderTextColor="#CCCCCC"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[loginStyle.input, { color: 'white' }]}
          placeholder="Enter your password"
          placeholderTextColor="#CCCCCC"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={[loginStyle.input, { color: 'white' }]}
          placeholder="Confirm your password"
          placeholderTextColor="#CCCCCC"
          secureTextEntry
          value={cpassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={[loginStyle.loginButton, { backgroundColor: '#FFD700' }]} onPress={handleRegister}>
          <Text style={[loginStyle.loginText, { color: '#000000' }]}>REGISTER</Text>
        </TouchableOpacity>

        <View style={styles.adminTextContainer}>
          <Text style={styles.adminText}>For A Bathing Ape admins, </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterAdminScreen')}>
            <Text style={styles.clickHereText}>click here.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 10,
  },
  adminTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  adminText: {
    color: 'white',
    fontSize: 14,
  },
  clickHereText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;