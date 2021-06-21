import React from "react";
import { Button, FlatList, Alert } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector, useDispatch} from "react-redux";
import Colors from "../../constans/Colors";
import * as productsActions from '../../store/actions/products';

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    props.navigation.navigate('Edit',{productId: id});
  };

  const deleteHendler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text:'No', style:'default'},
      {text:'Yes', style:'destructive', onPress:() => {
          dispatch(productsActions.deleteProduct(id));
      }}
    ]);
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          imageUrl={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
             <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              //logic to edit
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => {
              deleteHendler(itemData.item.id)
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
