import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bape.jpg')} 
      style={styles.container}
      resizeMode="cover" 
    >

      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to A Bathing Ape!</Text>

   
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.getStartedButton]}
              onPress={() => navigation.navigate('RegisterScreen')}  
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end', 
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 25, 
    marginBottom: 15,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  getStartedButton: {
    backgroundColor: 'transparent', 
    borderWidth: 3, 
    borderColor: 'black', 
  },
  buttonText: {
    color: '#fff', 
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;