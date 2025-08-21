import React from 'react';
import { useTheme } from '@shopify/restyle';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import Landing from '../screens/Landing';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function MainStack({ route }) {
  const theme = useTheme();
  const { iceWhite } = theme.colors;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: iceWhite } }} initialRouteName={route}>
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
