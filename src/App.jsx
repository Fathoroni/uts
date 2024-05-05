// theme.ts
export const lightTheme = {
  backgroundColor: '#f0f0f0',
  activeColor: 'green',
  inactiveColor: '#ddd',
};

export const darkTheme = {
  backgroundColor: '#333',
  activeColor: 'yellow',
  inactiveColor: '#666',
};

export const ThemeContext = React.createContext();

// App.tsx
import React from 'react';
import { NavigationContainer, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import About from './screens/About';
import Account from './screens/Account';
import { ThemeContext, lightTheme, darkTheme } from './theme';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabScreen = ({ name, component, icon }) => {
  const { theme } = React.useContext(ThemeContext);

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
  const { theme } = React.useContext(ThemeContext);

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.activeColor,
        tabBarInactiveTintColor: theme.inactiveColor,
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
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      <NavigationContainer style={{ backgroundColor: theme.backgroundColor }}>
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={MenuTab} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 60,
  },
});

export default App;