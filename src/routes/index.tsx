import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/home';
import { Search } from '../screens/search';
import { Inbox } from '../screens/inbox';
import { NewFeed } from '../screens/newFeed';
import { Profile } from '../screens/profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ButtonNew } from '../components/BottomNew';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            }
            return <Ionicons name="search-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="NewFeed"
        component={NewFeed}
        options={{
          tabBarIcon: ({ size }) => {
            return <ButtonNew size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons
                  name="chatbubble-ellipses"
                  size={size}
                  color={color}
                />
              );
            }
            return (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
