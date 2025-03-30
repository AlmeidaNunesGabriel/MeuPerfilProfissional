import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; 
import AssetExample from './components/AssetExample';
import Home from "./src/screens/Home";
import { View} from 'react-native';
import About from './src/screens/About';
import Project from './src/screens/Project';

const Drawer = createDrawerNavigator();

export default function App() {
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


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center', // Mantém os itens centralizados
  },
})