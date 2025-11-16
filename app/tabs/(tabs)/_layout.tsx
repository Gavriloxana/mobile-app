import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="Home"
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="tab1"
        options={{
          href: null, // ซ่อน tab จาก tab bar
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />
       <Tabs.Screen
        name="contact"
        options={{
          title: 'contact ',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="contacts" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'login',
          tabBarIcon: ({ color }) => <AntDesign name="login" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="tab6"
        options={{
          href: null, // ซ่อน tab จาก tab bar
        }}
      />
      <Tabs.Screen
        name="List"
        options={{
          title: 'List',
          tabBarIcon: ({ color }) => <AntDesign name="bars" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
