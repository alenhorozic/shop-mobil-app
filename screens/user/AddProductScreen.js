import React, { useEffect, useCallback, useReducer } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import Colors from "../../constans/Colors";
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../store/actions/products";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]:action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]:action.isValid
    };
    let updatetFormIsValid = true;
    for(const key in updatedValidities) {
      updatetFormIsValid = updatetFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatetFormIsValid,
      inputValidities:updatedValidities,
      inputValues:updatedValues,
    };
  }
  return state;
};

const AddProductScreen = (props) => {
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: "",
      imageUrl: "",
      price: "",
      description: "",
    },
    inputValidities: {
      title: false,
      imageUrl: false,
      price: false,
      description: false,
    },
    formIsValid: false,
  });

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Please check your input.", [{ text: "OK" }]);
      return;
    }
    dispatch(
      productsActions.createProduct(
        formState.inputValues.title,
        formState.inputValues.imageUrl,
        formState.inputValues.description,
        parseFloat(formState.inputValues.price.replace(/,/g, ".")),                        //parseFloat(price.replace(/,/g, "."))
      )
    );
    props.navigation.goBack();
  }, [dispatch,formState]);

  useEffect(() => {
    props.navigation.setOptions({ submit: submitHandler });
  }, [submitHandler]);

  const textChangeHandler = (inputIdentifier,text) => {
    let isValid = false;
    if (text.trim().length > 0) {
      isValid = true;
    }
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid: isValid,
      input:inputIdentifier
    });
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            id="title"
            style={styles.input}
            value={formState.inputValues.title}
            onChangeText={textChangeHandler.bind(this,'title')}
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
          />
          {!formState.inputValidities.title && <Text>Please enter a valid title</Text>}
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>ImageURL</Text>
          <TextInput
            value={formState.inputValues.imageUrl}
            style={styles.input}
            onChangeText={textChangeHandler.bind(this,'imageUrl')}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            value={formState.inputValues.price}
            style={styles.input}
            onChangeText={textChangeHandler.bind(this,'price')}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            value={formState.inputValues.description}
            style={styles.input}
            onChangeText={textChangeHandler.bind(this,'description')}
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
