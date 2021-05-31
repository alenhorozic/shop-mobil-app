import {createStackNavigator, createAppContainer} from '@react-navigation/stack'
import {Platform} from 'react-native';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constans/Colors';
import React from 'react';

const Stack = createStackNavigator();

    const screenOptionStyle = {
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Colors.primary : 'red',
        },
        headerTintColor: Platform.OS === 'android' ? 'red' : Colors.primary,
    }
    };

    const ProductsNavigator = () => {
        return (
          <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="All Products" component={ProductOverviewScreen} />
          </Stack.Navigator>
        );
      };

export {ProductsNavigator};