import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen'
import MovieDetail from './Components/MovieDetail'
import SearchScreen from './Components/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: () => null,
        contentStyle: { backgroundColor: 'white' },
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={MovieDetail} />
        <Stack.Screen name="search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

