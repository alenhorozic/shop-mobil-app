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

const AddProductScreen = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = useCallback(() => {
    dispatch(
      productsActions.createProduct(
        title,
        imageUrl,
        description,
        parseFloat(price.replace(/,/g, "."))
      )
    );
    props.navigation.goBack();
  }, [dispatch, title, imageUrl, description, price]);

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
            onChangeText={(text) => setTitle(text)}
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>ImageURL</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            onChangeText={(number) => setPrice(number)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
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

export default AddProductScreen;
