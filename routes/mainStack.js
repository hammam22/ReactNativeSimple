
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Plogin } from './pages/Plogin';
import { reg } from './pages/Pregister';

const screens = {
    loging: {
        screen: Plogin
    },
    reg: {
        screen: reg
    },
}

const mainstack = createNativeStackNavigator(screens);

export default NavigationContainer(mainstack);