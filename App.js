import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './store/reducers/products';
import {ProductsNavigator} from './navigation/ShopNavigator';
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import cartReducer from './store/reducers/cart';
import BottomTabNavigator from './navigation/TabNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const getFonts = () => {
 return Font.loadAsync({
    "axaxax": require('./assets/fonts/Axaxax.ttf')
  });
}

const store = createStore(rootReducer);

export default function App () {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(!fontsLoaded) {
    return <AppLoading startAsync={getFonts} onFinish={() => {setFontsLoaded(true)}} onError={console.warn}/>
  }else{
  return (
    <Provider store={store}>
    <NavigationContainer>
        <BottomTabNavigator />
    </NavigationContainer>
    </Provider>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
