import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const OrderScreen = props => {
    return(
        <View style={styles.container}>
            <Text >orders screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default OrderScreen;