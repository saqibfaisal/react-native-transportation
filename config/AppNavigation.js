import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home';
import RegisterVehicle from '../screen/RegisterVichels';
import Vehicle from '../screen/vichel';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddBooking from '../screen/addBooking';
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
function AppNavigation() {
  
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="RegisterVehicle"
          component={RegisterVehicle}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="addBooking"
          component={AddBooking}
        />
      </Tab.Navigator>
       */}
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />

        <Stack.Screen
          // options={{headerShown: false}}
          name="Vehicle"
          component={Vehicle}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="AddBooking"
          component={AddBooking}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RegisterVehicle"
          component={RegisterVehicle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
