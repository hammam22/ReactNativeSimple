import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Plogin from './pages/Plogin';
import Pregister from './pages/Pregister';
import Phome from './pages/Phome';





const Stack = createNativeStackNavigator();
{/*
git push -u origin master
 */}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Plogin} />
        <Stack.Screen name='register' component={Pregister} />
        <Stack.Screen name='home' component={Phome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

