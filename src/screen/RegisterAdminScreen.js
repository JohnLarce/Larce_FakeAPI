import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, ImageBackground, Alert, View, StyleSheet } from 'react-native';
import { loginStyle } from '../style/MainStyle';

const RegisterAdminScreen = ({ navigation }) => {
  const [adminCode, setAdminCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setConfirmPassword] = useState('');

  
  const MIN_USERNAME_LENGTH = 5;
  const MIN_PASSWORD_LENGTH = 8; 
  const ADMIN_CODE = 'BAPE123'; 

  const handleAdminRegister = () => {
    if (adminCode !== ADMIN_CODE) {
      Alert.alert('Error', 'Invalid admin code!');
      return;
    }

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

    console.log('Admin Code:', adminCode);
    console.log('Username:', username);
    console.log('Password:', password);


    Alert.alert('Success', 'Admin Registration Successful!');
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

       
        <Text style={styles.label}>Admin Code</Text>
        <TextInput
          style={[loginStyle.input, { color: '#FFFFFF' }]}
          placeholder="Enter admin code"
          placeholderTextColor="#CCCCCC" 
          value={adminCode}
          onChangeText={setAdminCode}
        />

     
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={[loginStyle.input, { color: '#FFFFFF' }]}
          placeholder="Enter your username"
          placeholderTextColor="#CCCCCC"
          value={username}
          onChangeText={setUsername}
        />

       
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[loginStyle.input, { color: '#FFFFFF' }]}
          placeholder="Enter your password"
          placeholderTextColor="#CCCCCC" 
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

      
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={[loginStyle.input, { color: '#FFFFFF' }]}
          placeholder="Confirm your password"
          placeholderTextColor="#CCCCCC" 
          secureTextEntry
          value={cpassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={[loginStyle.loginButton, { backgroundColor: '#FFD700' }]} onPress={handleAdminRegister}>
          <Text style={[loginStyle.loginText, { color: '#000000' }]}>REGISTER AS ADMIN</Text>
        </TouchableOpacity>

       
        <View style={styles.backTextContainer}>
          <Text style={styles.backText}>Not an admin? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.clickHereText}>Go back</Text>
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
  backTextContainer: {
    flexDirection: 'row', 
    marginTop: 20, 
  },
  backText: {
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

export default RegisterAdminScreen;