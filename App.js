import React, { useEffect } from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DadosPessoais from "./src/screens/DadosPessoais";
import Formacao from './src/screens/Formacao';
import Carreira from './src/screens/Carreira';
import About from './src/screens/About';
import Project from './src/screens/Project';

import * as Font from 'expo-font';
import { useFonts, Rajdhani_400Regular, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// Componente para as Top Tabs do Perfil Profissional
function PerfilProfissionalTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
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
          fontSize: 12,
          fontFamily: 'Rajdhani_700Bold',
          textTransform: 'none',
        },
        tabBarPressColor: 'rgba(0, 122, 255, 0.1)',
      }}
    >
      <TopTab.Screen 
        name="DadosPessoais" 
        component={DadosPessoais}
        options={{ tabBarLabel: 'Dados Pessoais' }}
      />
      <TopTab.Screen 
        name="Formacao" 
        component={Formacao}
        options={{ tabBarLabel: 'Formação' }}
      />
      <TopTab.Screen 
        name="Carreira" 
        component={Carreira}
        options={{ tabBarLabel: 'Carreira' }}
      />
    </TopTab.Navigator>
  );
}

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
          initialRouteName="Perfil"
          screenOptions={{
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#666',
            tabBarStyle: {
              backgroundColor: '#f5f5f5',
              borderTopWidth: 1,
              borderTopColor: '#e0e0e0',
              paddingBottom: 5,
              paddingTop: 5,
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: 'Rajdhani_700Bold',
            },
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
            headerTitleStyle: {
              fontFamily: 'Orbitron-Bold',
              fontSize: 18,
            },
            headerTintColor: '#333',
          }}
        >
          <Tab.Screen 
            name="Perfil" 
            component={PerfilProfissionalTabs} 
            options={{
              tabBarLabel: 'Perfil Profissional',
              headerTitle: 'Perfil Profissional',
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size, color }}>👨‍💼</Text>
              ),
            }}
          />
          <Tab.Screen 
            name="About" 
            component={About}
            options={{
              tabBarLabel: 'Sobre Mim',
              headerTitle: 'Sobre Mim',
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size, color }}>ℹ️</Text>
              ),
            }}
          />
          <Tab.Screen 
            name="Project" 
            component={Project}
            options={{
              tabBarLabel: 'Projetos',
              headerTitle: 'Meus Projetos',
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size, color }}>🚀</Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}