import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SparePartsDashboard = () => {
     const navigation = useNavigation();
      const [searchQuery, setSearchQuery] = useState('');

      const handleSearch = () => {
        // Check if the query is one of the valid spare parts
        if (['battery', 'brake pad', 'tyre', 'radiator'].includes(searchQuery.toLowerCase())) {
          navigation.navigate('Spare Parts Search Results', { query: searchQuery }); // Navigate to the search results page
          setSearchQuery(''); // Clear the search input
          Keyboard.dismiss(); // Dismiss the keyboard
        } else {
          alert('Please enter a valid spare part');
        }
      };

    const handleLogoPress = () => {
        navigation.navigate('MainPage'); // Navigate to the Main Page
    };

    const handleNotificationPress = (notification) => {
        navigation.navigate(notification); // Navigate to the relevant notification screen
    };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        {/* Left side - Logo */}
        <TouchableOpacity onPress={handleLogoPress}>
                            <Image source={require('../assets/images/applogo.png')} style={styles.logo} resizeMode="contain" />
                        </TouchableOpacity>

        {/* Right side - Menu and Profile icons */}
        <View style={styles.navIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/menu.png' }} // Menu icon from Bootstrap (online link)
              style={styles.navIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/user.png' }} // Profile icon from Bootstrap (online link)
              style={styles.navIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Heading Section with Car Image */}
      <View style={styles.headingSection}>
        <Image source={require('../assets/images/cute car.png')} style={styles.cuteCar} />
        <Text style={styles.headingText}>
          PICK YOUR{' \n'}
          SPARE PARTS
        </Text>
      </View>

      {/* Search Bar moved up */}
      <TextInput
              style={styles.searchBar}
              placeholder="What do you need?"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch} // Trigger search on submit
            />

      {/* Icon Buttons: Removed Notifications */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => { /* Placeholder: Add navigation or action for My Orders */ }}>
          <Image source={require('../assets/images/order.png')} style={styles.icon} />
          <Text>My Orders</Text>
        </TouchableOpacity>

<TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Spare Parts Cart')}>
  <Image source={require('../assets/images/cart.png')} style={styles.icon} />
  <Text>My Cart</Text>
</TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationsContainer}>
        {/* Add realistic notifications */}
        <View style={[styles.notification, { backgroundColor: '#ffebee' }]}>
          <Text style={styles.notificationTitle}>Battery Price Surge in Germany</Text>
          <Text style={styles.notificationDescription}>
            Due to increased demand, battery prices have surged by 15% in Germany. Local shops like Autohaus Müller are facing stock shortages.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#e8f5e9' }]}>
          <Text style={styles.notificationTitle}>Tire Imports from China Affected</Text>
          <Text style={styles.notificationDescription}>
            The ongoing shipping crisis has delayed tire imports from China, resulting in a 20% price hike. Check with local retailers for availability.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#ffe0b2' }]}>
          <Text style={styles.notificationTitle}>Brake Pads Price Adjustment</Text>
          <Text style={styles.notificationDescription}>
            Leading brands like Brembo and Bosch have raised their brake pads prices by 10% across Europe. Expect new pricing in local shops soon.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#d1c4e9' }]}>
          <Text style={styles.notificationTitle}>Axle Wheel Production Delays</Text>
          <Text style={styles.notificationDescription}>
            Due to factory shutdowns in Japan, axle wheels are experiencing a production delay, leading to potential shortages and increased prices.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#fff3e0' }]}>
          <Text style={styles.notificationTitle}>Local Shop Discounts on Batteries</Text>
          <Text style={styles.notificationDescription}>
            Local auto parts shop, CarZone, is offering a 5% discount on select batteries until the end of the month. Don't miss out!
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#f1f8e9' }]}>
          <Text style={styles.notificationTitle}>Tyre Exchange Program Launch</Text>
          <Text style={styles.notificationDescription}>
            TireHub is launching a tire exchange program allowing customers to trade in old tires for discounts on new purchases.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#fce4ec' }]}>
          <Text style={styles.notificationTitle}>Brake Pad Quality Concerns</Text>
          <Text style={styles.notificationDescription}>
            Some brake pads from recent batches have been reported to wear out quickly. Check with suppliers for quality assurance certifications.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#e3f2fd' }]}>
          <Text style={styles.notificationTitle}>New Battery Technology Introduced</Text>
          <Text style={styles.notificationDescription}>
            A new lithium-sulfur battery technology has been introduced, promising a longer lifespan and better performance. Available at major retailers.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#fff8e1' }]}>
          <Text style={styles.notificationTitle}>Shipping Discounts on Spare Parts</Text>
          <Text style={styles.notificationDescription}>
            AutoParts Online is offering free shipping for orders over $200 on spare parts for a limited time. Order now!
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#e1f5fe' }]}>
          <Text style={styles.notificationTitle}>Price Comparison Tool Launched</Text>
          <Text style={styles.notificationDescription}>
            A new price comparison tool has been launched to help consumers find the best deals on spare parts across various retailers.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#f0f4c3' }]}>
          <Text style={styles.notificationTitle}>Recycling Initiative for Old Parts</Text>
          <Text style={styles.notificationDescription}>
            A new initiative encourages recycling of old spare parts. Participating stores will offer discounts on new purchases when you recycle.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#f8bbd0' }]}>
          <Text style={styles.notificationTitle}>Tire Pressure Monitoring Systems Required</Text>
          <Text style={styles.notificationDescription}>
            New regulations mandate the installation of Tire Pressure Monitoring Systems (TPMS) in all new vehicles. Check local laws for compliance.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#f1f8e9' }]}>
          <Text style={styles.notificationTitle}>Battery Exchange Offers</Text>
          <Text style={styles.notificationDescription}>
            AutoZone is running a battery exchange program, offering a $10 discount on new batteries when you bring in an old one.
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#e8f5e9' }]}>
          <Text style={styles.notificationTitle}>Tyre Safety Tips Released</Text>
          <Text style={styles.notificationDescription}>
            Authorities have released new guidelines for tire safety. Ensure your tires are in good condition before your next road trip!
          </Text>
        </View>

        <View style={[styles.notification, { backgroundColor: '#ffebee' }]}>
          <Text style={styles.notificationTitle}>Brake Pad Recall Alert</Text>
          <Text style={styles.notificationDescription}>
            A recall has been issued for certain brake pads sold between January and March 2024 due to performance issues. Check your vehicle!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  // Navigation Bar styles
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00338D', // Blue color
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  logo: {
    width: 60,  // Adjust size as needed
    height: 40,  // Adjust height to give more space if needed
    resizeMode: 'contain',  // Ensure the entire image is shown
  },
  navIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  headingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  cuteCar: {
    width: 150,  // Increase width as needed
    height: 100,  // Height set to increase size
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  iconButton: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  notificationsContainer: {
    flex: 1,
    marginBottom: 16,
  },
  notification: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationTitle: {
    fontWeight: 'bold',
  },
  notificationDescription: {
    color: '#555',
  },
});

export default SparePartsDashboard;