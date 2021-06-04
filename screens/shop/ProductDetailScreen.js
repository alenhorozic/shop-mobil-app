import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constans/Colors";
import * as cartActions from "../../store/actions/cart";

const ProductDetailScreen = (props) => {
  const productId = props.route.params.productId;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId));

    const dispatch = useDispatch();

  return (
    <ScrollView style={styles.product}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
      </View>
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add To Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{selectedProduct.title}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
        <Text style={styles.price}>$ {selectedProduct.price.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 30,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  actions: {
    alignItems: "center",
  },
  details: {
    alignItems: "center",
    padding: 5,
  },
  title: {
    margin: 15,
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    letterSpacing: 1,
    fontSize: 17,
  },
  price: {
    margin: 15,
    letterSpacing: 1,
    fontSize: 20,
    color: "#888",
  },
});

export default ProductDetailScreen;
