import React, { useEffect } from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from "./src/screens/Home";
import About from './src/screens/About';
import Project from './src/screens/Project';

import * as Font from 'expo-font';
import { useFonts, Rajdhani_400Regular, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [rajdhaniLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_700Bold,
  });

  const [orbitronLoaded, setOrbitronLoaded] = React.useState(false);

  useEffect(() => {
    async function loadOrbitronFont() {
      await Font.loadAsync({
        'Orbitron': require('./src/assets/fonts/Orbitron.ttf'),
        'Orbitron-Bold': require('./src/assets/fonts/Orbitron-Bold.ttf'),
      });
      setOrbitronLoaded(true);
    }

    loadOrbitronFont();
  }, []);

  if (!rajdhaniLoaded || !orbitronLoaded) return null;

  // Define fonte padrão para todos os <Text>
  if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.style = { 
      fontFamily: 'Rajdhani_400Regular',
      fontSize: 18
    };
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#333',
            tabBarInactiveTintColor: '#666',
            tabBarIndicatorStyle: {
              backgroundColor: '#007AFF',
              height: 3,
            },
            tabBarStyle: {
              backgroundColor: '#f5f5f5',
              elevation: 4,
              shadowOpacity: 0.1,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: 'Rajdhani_700Bold',
              textTransform: 'none',
            },
            tabBarPressColor: 'rgba(0, 122, 255, 0.1)',
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarLabel: 'Início'
            }}
          />
          <Tab.Screen 
            name="About" 
            component={About}
            options={{
              tabBarLabel: 'Sobre Mim'
            }}
          />
          <Tab.Screen 
            name="Project" 
            component={Project}
            options={{
              tabBarLabel: 'Projetos'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}