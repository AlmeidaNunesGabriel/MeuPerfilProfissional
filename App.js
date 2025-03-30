import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; 
import AssetExample from './components/AssetExample';
import Home from "./src/screens/Home";
import { View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Home />
      </View>
      
    </SafeAreaView>
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