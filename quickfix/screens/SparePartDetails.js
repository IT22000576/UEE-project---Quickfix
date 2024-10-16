import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const SparePartDetails = ({ route, cart, setCart }) => {
  const { item } = route.params; // Get the item details from the route parameters
  const navigation = useNavigation(); // Initialize navigation

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    // Check if the item already exists in the cart
    const existingItem = cart.find(cartItem =>
      cartItem.itemName === item.itemName &&
      cartItem.brandName === item.brandName // Check brand as well
    );

    if (existingItem) {
      // If item already in cart, increase the quantity
      const updatedCart = cart.map(cartItem =>
        cartItem.itemName === item.itemName && cartItem.brandName === item.brandName
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If item not in cart, add it with quantity of 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
Alert.alert('Added to Cart', `${item.brandName} ${item.itemName} has been added to your cart!`);
  };

  // Function to navigate to the cart screen
  const handleViewCart = () => {
    navigation.navigate('Spare Parts Cart'); // Replace 'Cart' with your actual cart screen name if different
  };

  return (
    <View style={styles.container}>
      <Image source={item.logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.shopName}>{item.shop}</Text>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Text style={styles.brandName}>{item.brandName}</Text>
      <Text style={styles.brandPrice}>Rs. {item.price}</Text>
      <Text style={styles.deliveryInfo}>Delivery fee will be charged</Text>

      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* New View Cart Button */}
      <TouchableOpacity style={styles.viewCartButton} onPress={handleViewCart}>
        <Text style={styles.viewCartButtonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: 100,
    marginBottom: 10,
  },
  shopName: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  brandName: {
    fontStyle: 'italic', // Optionally style the brand name
    fontSize: 18,
    marginBottom: 5,
  },
  brandPrice: {
    color: 'green',
    fontSize: 18,
    marginBottom: 10,
  },
  deliveryInfo: {
    fontSize: 12,
    color: 'gray',
  },
  addToCartButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18, // Enlarged text
    fontWeight: 'bold',
  },
  viewCartButton: {
    backgroundColor: 'blue', // Change color as desired
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  viewCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SparePartDetails;