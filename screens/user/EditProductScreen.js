import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import Colors from "../../constans/Colors";
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../store/actions/products";

const EditProductScreen = (props) => {
  const prodId = props.route.params.productId;
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedProduct.title);
  const [imageUrl, setImageUrl] = useState(editedProduct.imageUrl);
  const [price, setPrice] = useState(editedProduct.price);
  const [description, setDescription] = useState(editedProduct.description);

  const submitHandler = useCallback(() => {
    dispatch(
      productsActions.updateProduct(
        prodId,
        title,
        imageUrl,
        description,
        parseFloat(price.replace(',','.'))
      )
    );
    props.navigation.goBack();
  }, [dispatch, prodId, title, imageUrl, description, price]);

  useEffect(() => {
    props.navigation.setOptions({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
            keyboardType='default'
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>ImageURL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={price.toString()}
            onChangeText={(number) => setPrice(number)}
            keyboardType='decimal-pad'
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.actions}>
          <Button color={Colors.primary} title="Save" onPress={submitHandler} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#99ccff",
    fontSize: 18,
    borderRadius: 7,
    margin: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  actions: {
    alignItems: "center",
    marginTop: 15,
  },
});

export default EditProductScreen;
