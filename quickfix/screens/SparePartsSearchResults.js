import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SparePartsSearchResults = ({ route }) => {
  const navigation = useNavigation();
  const { query } = route.params;

  const shopsData = {
    battery: [
      {
        shop: 'Auto Parts',
        logo: require('../assets/images/shop1logo.jpg'),
        brands: [
          { brandName: 'Exide', price: 500.00, image: require('../assets/images/battery.jpeg') },
          { brandName: 'Amaron', price: 550.00, image: require('../assets/images/battery.jpeg') },
          { brandName: 'Luminous', price: 600.00, image: require('../assets/images/battery.jpeg') },
        ],
      },
      {
        shop: 'Brand Yourself',
        logo: require('../assets/images/shop2logo.png'),
        brands: [
          { brandName: 'SF Sonic', price: 530.00, image: require('../assets/images/battery.jpeg') },
          { brandName: 'Dynex', price: 580.00, image: require('../assets/images/battery.jpeg') },
          { brandName: 'TATA Green', price: 620.00, image: require('../assets/images/battery.jpeg') },
          { brandName: 'Nippon', price: 670.00, image: require('../assets/images/battery.jpeg') },
          { brandName: 'Fronius', price: 720.00, image: require('../assets/images/battery.jpeg') },
        ],
      },
    ],
    radiator: [
      {
        shop: 'Express Car Parts',
        logo: require('../assets/images/shop3logo.jpeg'),
        brands: [
          { brandName: 'Mishimoto', price: 1000.00, image: require('../assets/images/radiators.jpeg') },
          { brandName: 'Spectra Premium', price: 1100.00, image: require('../assets/images/radiators.jpeg') },
          { brandName: 'Denso', price: 1200.00, image: require('../assets/images/radiators.jpeg') },
          { brandName: 'Genuine Toyota', price: 1300.00, image: require('../assets/images/radiators.jpeg') },
        ],
      },
      {
        shop: 'Auto Repair',
        logo: require('../assets/images/shop4logo.jpg'),
        brands: [
          { brandName: 'ACDelco', price: 1050.00, image: require('../assets/images/radiators.jpeg') },
          { brandName: 'Mopar', price: 1150.00, image: require('../assets/images/radiators.jpeg') },
          { brandName: 'Spectra', price: 1250.00, image: require('../assets/images/radiators.jpeg') },
        ],
      },
    ],
    'brake pad': [
      {
        shop: 'Auto Parts',
        logo: require('../assets/images/shop1logo.jpg'),
        brands: [
          { brandName: 'Bosch', price: 700.00, image: require('../assets/images/brakepads.jpeg') },
          { brandName: 'Brembo', price: 750.00, image: require('../assets/images/brakepads.jpeg') },
          { brandName: 'Akebono', price: 800.00, image: require('../assets/images/brakepads.jpeg') },
        ],
      },
      {
        shop: 'Brand Yourself',
        logo: require('../assets/images/shop2logo.png'),
        brands: [
          { brandName: 'Raybestos', price: 720.00, image: require('../assets/images/brakepads.jpeg') },
          { brandName: 'Power Stop', price: 770.00, image: require('../assets/images/brakepads.jpeg') },
          { brandName: 'Hawk Performance', price: 820.00, image: require('../assets/images/brakepads.jpeg') },
        ],
      },
    ],
    tyre: [
      {
        shop: 'Express Car Parts',
        logo: require('../assets/images/shop3logo.jpeg'),
        brands: [
          { brandName: 'Michelin', price: 1200.00, image: require('../assets/images/tyre.jpeg') },
          { brandName: 'Bridgestone', price: 1250.00, image: require('../assets/images/tyre.jpeg') },
          { brandName: 'Goodyear', price: 1300.00, image: require('../assets/images/tyre.jpeg') },
          { brandName: 'Continental', price: 1350.00, image: require('../assets/images/tyre.jpeg') },
          { brandName: 'Dunlop', price: 1400.00, image: require('../assets/images/tyre.jpeg') },
        ],
      },
      {
        shop: 'Auto Repair',
        logo: require('../assets/images/shop4logo.jpg'),
        brands: [
          { brandName: 'Pirelli', price: 1150.00, image: require('../assets/images/tyre.jpeg') },
          { brandName: 'Hankook', price: 1300.00, image: require('../assets/images/tyre.jpeg') },
          { brandName: 'Toyo', price: 1250.00, image: require('../assets/images/tyre.jpeg') },
        ],
      },
    ],
  };

  const shops = shopsData[query.toLowerCase().replace(" ", "")] || [];
  const itemName = query.charAt(0).toUpperCase() + query.slice(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search Results for "{query}"</Text>
      </View>

      <ScrollView>
        {shops.length > 0 ? (
          shops.map((shop, index) => (
            <View key={`${shop.shop}-${index}`} style={styles.shopCard}>
              <Text style={styles.shopName}>{shop.shop}</Text>
              {shop.brands.map((brand, brandIndex) => (
                <View key={`${shop.shop}-${brand.brandName}-${brandIndex}`} style={styles.brandContainer}>
                  <Image source={brand.image} style={styles.itemImage} />
                  <View style={styles.brandInfo}>
                    <Text style={styles.itemName}>{itemName}</Text>
                    <Text style={styles.brandName}>{brand.brandName}</Text>
                    <Text style={styles.brandPrice}>Rs. {brand.price}</Text>
                    <Text style={styles.deliveryInfo}>Delivery fee will be charged</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.checkButton}
                    onPress={() => navigation.navigate('Spare Part Details', { item: { ...brand, itemName: itemName, shop: shop.shop, logo: shop.logo } })}
                  >
                    <Text style={styles.checkButtonText}>Check</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>No results found for "{query}". Please try another term.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  shopCard: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  shopName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  brandInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
  },
  brandPrice: {
    color: 'green',
  },
  deliveryInfo: {
    fontSize: 12,
    color: 'gray',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
  checkButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  checkButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SparePartsSearchResults;
