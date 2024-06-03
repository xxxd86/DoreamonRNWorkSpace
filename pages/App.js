import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './function/HomePage';
import SignPage from './function/SignPage';
import GPTPage from './function/GPTPage';
import AmapPage from './function/AmapPage';
import HostPage from './function/HostPage';
import LoginPage from './LoginPage';
function EmptyScreen() {
  return <View />;
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={EmptyScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignPage" component={SignPage} />
        <Stack.Screen name="GPTPage" component={GPTPage} />
        <Stack.Screen name="EditPost" component={EmptyScreen} />
        <Stack.Screen name="AmapPage" component={AmapPage} />
        <Stack.Screen name="HostPage" component={HostPage} />
        <Stack.Screen name="LoginPage" component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
