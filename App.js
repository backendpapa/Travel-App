import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Home,Search,Trip,Guide} from './screens/Index'
import Tabs from './navigation/tabs';



const Stack=createStackNavigator()

const App = () => {


  return (
    // <SafeAreaView >
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Guide" component={Guide} />
        <Stack.Screen name="Trip" component={Trip} />
     </Stack.Navigator>
    </NavigationContainer>

    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
