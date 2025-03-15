import React, { useState, useEffect } from 'react';
import { TextInput, Text, TouchableOpacity, ImageBackground, Alert, View, StyleSheet } from 'react-native';
import { loginStyle } from '../style/MainStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registeredUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'admin1', password: 'admin123', isAdmin: true },
  ];

  const saveLoginData = async (user) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(user));
      console.log('Login data saved successfully!');
    } catch (error) {
      console.error('Failed to save login data:', error);
    }
  };

  const retrieveLoginData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const parsedData = JSON.parse(userData);
        console.log('Retrieved login data:', parsedData);
        return parsedData;
      }
    } catch (error) {
      console.error('Failed to retrieve login data:', error);
    }
    return null;
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userData = await retrieveLoginData();
      if (userData) {
        if (userData.isAdmin) {
          navigation.navigate('AdminDashboard');
        } else {
        
        }
      }
    };

    checkLoginStatus();
  }, [navigation]);

  const handleLogin = async () => {
    const user = registeredUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      await saveLoginData(user); 
      if (user.isAdmin) {
        Alert.alert('Success', 'Admin login successful!');
        navigation.navigate('AdminDashboard');
      } else {
        Alert.alert('Success', 'User login successful!');
       
      }
    } else {
      Alert.alert('Error', 'Invalid username or password!');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bapelog.jpg')}
      style={loginStyle.container}
      resizeMode="cover"
    >
      
      <View style={styles.overlay} />

    
      <View style={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to A Bathing Ape!</Text>
        </View>

        <TextInput
          style={[loginStyle.input, { color: '#FFFFFF' }]}
          placeholder="Username"
          placeholderTextColor="#CCCCCC"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={[loginStyle.input, { color: '#FFFFFF' }]}
          placeholder="Password"
          placeholderTextColor="#CCCCCC"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={[loginStyle.loginButton, { backgroundColor: '#FFD700' }]} onPress={handleLogin}>
          <Text style={[loginStyle.loginText, { color: '#000000' }]}>LOGIN</Text>
        </TouchableOpacity>

     
        <View style={styles.adminTextContainer}>
          <Text style={styles.adminText}>Are you an admin? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
            <Text style={styles.clickHereText}>Login as admin</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerTextContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.clickHereText}>Register here</Text>
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
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  adminTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  adminText: {
    color: 'white',
    fontSize: 14,
  },
  registerText: {
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

export default LoginScreen;