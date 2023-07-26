import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Plogin from './pages/Plogin';
import Pregister from './pages/Pregister';





const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Plogin} />
        <Stack.Screen name='register' component={Pregister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

