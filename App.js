import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "./src/screens/Home";
import About from './src/screens/About';
import Project from './src/screens/Project';

import * as Font from 'expo-font';
import { useFonts, Rajdhani_400Regular, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

const Drawer = createDrawerNavigator();

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
    Text.defaultProps.style = { fontFamily: 'Rajdhani_400Regular',
      fontSize: 18
     }; // Ou 'Orbitron' se quiser essa como padrão
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre Mim" component={About} />
        <Drawer.Screen name="Projetos" component={Project} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
