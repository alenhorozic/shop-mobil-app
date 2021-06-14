import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProductsNavigator, CartStackNavigator, OrderStackNavigator } from "./ShopNavigator";
import Icon from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Products') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Cart'){
          iconName = focused ? 'cart' : 'cart-outline';
        }
        else if (route.name === 'Order'){
            iconName = focused ? 'md-cube' : 'md-cube-outline';
          }
        return <Icon name={iconName} size={size}  color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor:'white',
      inactiveTintColor: 'black',
      activeBackgroundColor: 'black',
           style: {
                 backgroundColor: 'white',
           }
    }}
    
    >
       
      <Tab.Screen name="Products" component={ProductsNavigator} />
      <Tab.Screen name="Cart" component={CartStackNavigator} />
      <Tab.Screen name="Order" component={OrderStackNavigator} />
      
    </Tab.Navigator>
    
  );
};

export default BottomTabNavigator;