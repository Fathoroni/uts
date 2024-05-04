import React from 'react';
import { StyleSheet, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import About from './screens/About';
import Account from './screens/Account';
import { theme } from './theme';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabScreen = ({ name, component, icon }) => {
  return (
    <Tabs.Screen
      name={name}
      component={component}
      options={{
        tabBarLabel: name,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name={icon} color={color} size={size} />
        ),
      }}
    />
  );
};

const MenuTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.active,
        tabBarStyle: styles.tabBar,
      }}
    >
      <TabScreen name="Home" component={Home} icon="home" />
      <TabScreen name="About" component={About} icon="information-variant" />
      <TabScreen name="Account" component={Account} icon="account" />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={MenuTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 60,
  },
});

export default App;

export const theme = {
  colors: {
    active: 'green',
  },
};

