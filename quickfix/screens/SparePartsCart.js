import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert, Modal, Button } from 'react-native';

const SparePartsCart = ({ navigation, cart, setCart }) => {
  // State for managing the transport option
  const [modalVisible, setModalVisible] = useState(false);
  const [transportOption, setTransportOption] = useState('self'); // Default option
  const [transportFee] = useState(400); // Fee for garage transport

  // Function to increase quantity of item
  const handleIncreaseQuantity = (itemName) => {
    const updatedCart = cart.map(item =>
      item.itemName === itemName ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Function to decrease quantity of item
  const handleDecreaseQuantity = (itemName) => {
    const updatedCart = cart.map(item => {
      if (item.itemName === itemName) {
        return { ...item, quantity: Math.max(0, item.quantity - 1) }; // Ensure quantity doesn't go below 0
      }
      return item; // Return unchanged item
    });

    // Filter out items with zero quantity
    setCart(updatedCart.filter(item => item.quantity > 0));
  };

  // Function to remove item completely from cart
  const handleRemoveItem = (itemName) => {
    const updatedCart = cart.filter(item => item.itemName !== itemName);
    setCart(updatedCart);
  };

  // Function to handle placing the order
  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      Alert.alert("Your cart is empty. Please add items to place an order.");
      return;
    }

    setModalVisible(true); // Show transport option modal
  };

  // Function to confirm order after selecting transport option
  const confirmOrder = () => {
    // Confirmation alert
    Alert.alert(
      "Confirm Order",
      `You have selected to ${transportOption === 'garage' ? 'have the garage transport' : 'pick up the items yourself'}.`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Order canceled"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            // Calculate the total price
            const totalPrice = calculateTotalPrice();
            const finalTotalPrice = transportOption === 'garage' ? totalPrice + transportFee : totalPrice;

            // Navigate to the SparePartsMyOrders screen and pass the orders and total price
            navigation.navigate('Spare Parts My Orders', { orders: cart, totalPrice: finalTotalPrice });

            // Reset the cart after placing the order
            setCart([]);
          },
        },
      ]
    );

    setModalVisible(false); // Close modal after confirming
  };

  // Function to navigate to Spare Parts Dashboard to add more items
  const handleAddMoreToCart = () => {
    navigation.navigate('Spare Parts Dashboard');
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const total = cart.reduce((sum, item) => {
      return sum + (parseFloat(item.price) * item.quantity);
    }, 0);

    return total; // Keeping two decimal places
  };

  // Render each cart item
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Text style={styles.brandName}>{item.brandName}</Text>
      <Text style={styles.price}>Price: {item.price} LKR</Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.blackButton} onPress={() => handleIncreaseQuantity(item.itemName)}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blackButton} onPress={() => handleDecreaseQuantity(item.itemName)}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blackButton} onPress={() => handleRemoveItem(item.itemName)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.itemName}
          />
          <Text style={styles.totalPrice}>Total Price: {calculateTotalPrice()} LKR</Text>
        </>
      ) : (
        <Text>Your cart is empty</Text>
      )}
      {/* Add More to Cart Button */}
      <TouchableOpacity style={styles.addMoreButton} onPress={handleAddMoreToCart}>
        <Text style={styles.addMoreButtonText}>Add More to Cart</Text>
      </TouchableOpacity>

      {/* Place Order Button */}
      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>

      {/* Modal for transport option */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Transport Option</Text>
            <TouchableOpacity onPress={() => setTransportOption('self')} style={styles.radioButton}>
              <Text style={styles.radioText}>Pick up Myself</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTransportOption('garage')} style={styles.radioButton}>
              <Text style={styles.radioText}>Garage Transport (+400 LKR)</Text>
            </TouchableOpacity>
            <Button title="Confirm" onPress={confirmOrder} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF0000" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  blackButton: {
    backgroundColor: '#000', // Black background
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff', // White text
    fontWeight: 'bold',
  },
  addMoreButton: {
    backgroundColor: '#28a745', // Green background
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addMoreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  placeOrderButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10, // Adjusted margin to give space between buttons
  },
  placeOrderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  radioButton: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 16,
  },
});

export default SparePartsCart;
