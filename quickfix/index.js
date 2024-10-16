import React, { useState } from 'react'; // Import useState to manage the cart state
import { registerRootComponent } from 'expo'; // Importing the function to register the root component for Expo
import { NavigationContainer } from '@react-navigation/native'; // Handles navigation container to manage the app's navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Creates a stack-based navigation (moving between screens)
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // GestureHandlerRootView allows gestures to work in the app

// Importing the dashboard and other screen components
import SparePartsDashboard from './screens/SparePartsDashboard';
import SparePartsSearchResults from './screens/SparePartsSearchResults';
import SparePartDetails from './screens/SparePartDetails';
import SparePartsCart from './screens/SparePartsCart';
// import SparePartsCheckout from './screens/SparePartsCheckout';
// import SparePartsPlaceOrder from './screens/SparePartsPlaceOrder';
import SparePartsMyOrders from './screens/SparePartsMyOrders';

// Creating a stack navigator to manage screen navigation in the app
const Stack = createNativeStackNavigator();

const App = () => {
    const [cart, setCart] = useState([]); // State to manage the cart items

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {/* Wrapping everything with GestureHandlerRootView to enable gesture handling */}
            <NavigationContainer>
                {/* The main navigation container for the entire app */}
                <Stack.Navigator initialRouteName="Spare Parts Dashboard">
                    <Stack.Screen name="Spare Parts Dashboard" component={SparePartsDashboard} />
                    <Stack.Screen name="Spare Parts Search Results" component={SparePartsSearchResults} />
                    {/* Passing cart and setCart props to SparePartDetails */}
                    <Stack.Screen name="Spare Part Details">
                        {(props) => <SparePartDetails {...props} cart={cart} setCart={setCart} />}
                    </Stack.Screen>
                    {/* Passing cart and setCart props to SparePartsCart */}
                    <Stack.Screen name="Spare Parts Cart">
                        {(props) => <SparePartsCart {...props} cart={cart} setCart={setCart} />}
                    </Stack.Screen>
                    <Stack.Screen name="Spare Parts My Orders" component={SparePartsMyOrders} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

// Registering the root component of the app
registerRootComponent(App);