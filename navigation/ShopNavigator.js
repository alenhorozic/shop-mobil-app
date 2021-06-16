import { createStackNavigator } from "@react-navigation/stack";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import React from "react";
import UserProductsScreen from "../screens/user/UserProductScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

import EditProductScreen from '../screens/user/EditProductScreen';
import AddProductScreen from '../screens/user/AddProductScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "white",
  },
  headerTintColor: "black",
  headerBackTitle: "Back",
};

const ProductsNavigator = (navData) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="All Products" component={ProductOverviewScreen} 
      options={{
        title: 'All Products',
        headerStyle: {
          backgroundColor: '#fff'},
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const CartStackNavigator = (navData) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} 
      options={{
        title: 'Cart',
        headerStyle: {
          backgroundColor: '#fff'},
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const OrderStackNavigator = (navData) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{
          title: "Order",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const AdminStackNavigator = (navData) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Yours Products On Sale"
        component={UserProductsScreen}
        options={{
          title: "Yours Products On Sale",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Add"
                iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
                onPress={() => {
                  //navigera till add new not edit
                  navData.navigation.navigate('Add');
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="Edit"
        component={EditProductScreen}
        options={{
          title: "Edit",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="Add"
        component={AddProductScreen}
        options={{
          title: "Add",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export {
  ProductsNavigator,
  CartStackNavigator,
  OrderStackNavigator,
  AdminStackNavigator,
};
