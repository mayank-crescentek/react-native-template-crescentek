import * as React from 'react';
import { Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/Home';
import Text from '../components/common/Text';
import HomeIcon from '../assets/svgs/HomeIcon.svg';
import ProfileIcon from '../assets/svgs/ProfileIcon.svg';
import HomeActiveIcon from '../assets/svgs/HomeActiveIcon.svg';
import ProfileActiveIcon from '../assets/svgs/ProfileActiveIcon.svg';

const Tab = createBottomTabNavigator();
const BottomTabStack = createStackNavigator();

function BottomTabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let IconComponent;
            if (route.name === 'Home') {
              IconComponent = focused ? <HomeActiveIcon /> : <HomeIcon />;
            } else if (route.name === 'Profile') {
              IconComponent = focused ? <ProfileActiveIcon /> : <ProfileIcon />;
            }
            return IconComponent;
          },

          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={null} // disables ripple effect on Android
            />
          ),
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 60 + insets.bottom,
            paddingTop: 10,
          },
          tabBarLabel: ({ focused }) => (
            <Text variant={'body'} fontWeight={focused ? '500' : '400'} marginTop={5}>
              {route.name}
            </Text>
          ),
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BottomTabNavigator;

function HomeTab() {
  return (
    <BottomTabStack.Navigator>
      <BottomTabStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </BottomTabStack.Navigator>
  );
}
