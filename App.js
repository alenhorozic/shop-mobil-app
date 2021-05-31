import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './store/reducers/products';
import {ProductsNavigator} from './navigation/ShopNavigator';
import { NavigationContainer } from "@react-navigation/native";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <ProductsNavigator />
    </NavigationContainer>
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
