import {createStackNavigator} from '@react-navigation/stack'
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import React from 'react';

const Stack = createStackNavigator();

    const ProductsNavigator = () => {
        return (
          <Stack.Navigator >
            <Stack.Screen name="All Products" component={ProductOverviewScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailScreen}  />
          </Stack.Navigator>
        );
      };

      const CartStackNavigator = () => {
        return (
          <Stack.Navigator >
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        );
      };

      const OrderStackNavigator = () => {
        return (
          <Stack.Navigator >
            <Stack.Screen name="Order" component={OrderScreen} />
          </Stack.Navigator>
        );
      };

export {ProductsNavigator,CartStackNavigator,OrderStackNavigator};