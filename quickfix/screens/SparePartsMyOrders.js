import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Share } from 'react-native';

const SparePartsMyOrders = ({ route, navigation }) => {
  const { orders, totalPrice } = route.params; // Get the orders and total price passed from the cart screen

  // Function to download the orders list as a text file
  const downloadOrdersList = async () => {
    // Create a string representation of the orders
    const ordersList = orders.map(item => (
      `Item Name: ${item.itemName}\nBrand: ${item.brandName}\nPrice: ${item.price} LKR\nQuantity: ${item.quantity}\n`
    )).join('\n');

    // You can use Share API to share or download the orders list
    try {
      await Share.share({
        message: ordersList,
        title: 'My Spare Parts Orders',
      });
    } catch (error) {
      console.error('Error sharing the orders list:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      {orders.length > 0 ? (
        <>
          <FlatList
            data={orders}
            keyExtractor={(item, index) => index.toString()} // Use index as key since orders may not have unique IDs
            renderItem={({ item }) => (
              <View style={styles.orderItem}>
                <Text style={styles.itemName}>{item.itemName}</Text>
                <Text style={styles.brandName}>{item.brandName}</Text>
                <Text style={styles.price}>Price: {item.price} LKR</Text>
                <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              </View>
            )}
          />
          <Text style={styles.totalPrice}>Total Amount: {totalPrice} LKR</Text>

          {/* Rearrange the buttons */}
          <View style={styles.buttonContainer}>
            <Button title="Download Orders List" onPress={downloadOrdersList} />
            <Button
              title="Back to Dashboard"
              onPress={() => navigation.navigate('Spare Parts Dashboard')} // Navigate to Dashboard
            />
          </View>
        </>
      ) : (
        <Text>No orders placed yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginVertical: 10,
    borderRadius: 5,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  brandName: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  price: {
    color: 'green',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row', // Layout buttons side by side
    justifyContent: 'space-between', // Space between buttons
  },
});

export default SparePartsMyOrders;
