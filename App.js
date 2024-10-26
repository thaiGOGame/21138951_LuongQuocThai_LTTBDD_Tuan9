import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './Screen01';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      {/*Screen option showheader false */}
      <Stack.Navigator
        initialRouteName="Screen01"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen01" component={Screen01} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}