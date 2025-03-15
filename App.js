import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RegisterScreen from './src/screen/RegisterScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import RegisterAdminScreen from './src/screen/RegisterAdminScreen';
import LoginScreen from './src/screen/LoginScreen'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="WelcomeScreen" 
            screenOptions={{ headerShown: false }} 
          >
           
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
            />
          
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />
        
            <Stack.Screen
              name="RegisterAdminScreen"
              component={RegisterAdminScreen}
            />
          
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;