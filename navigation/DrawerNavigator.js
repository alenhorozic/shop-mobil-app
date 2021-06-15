import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ProductsNavigator,
  CartStackNavigator,
  OrderStackNavigator,
  AdminStackNavigator,
} from "./ShopNavigator";
import TabNavigator from "./TabNavigator";
import Icon from "@expo/vector-icons/Ionicons";
import Colors from "../constans/Colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        inactiveTintColor: "black",
        activeBackgroundColor: "#99ccff",
        activeTintColor: "black",
      }}
    >
      <Drawer.Screen
        name="Products"
        component={(ProductsNavigator, TabNavigator)}
        options={{
          drawerIcon: (config) => (
            <Icon
              size={23}
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              color={"black"}
            ></Icon>
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Icon
              size={23}
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              color={"black"}
            ></Icon>
          ),
        }}
      />
      <Drawer.Screen
        name="Order"
        component={OrderStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Icon
              size={23}
              name={Platform.OS === "android" ? "md-cube" : "ios-cube"}
              color={"black"}
            ></Icon>
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Icon
              size={23}
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              color={"black"}
            ></Icon>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
