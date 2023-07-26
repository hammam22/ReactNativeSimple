import { View, Text } from "react-native";



export default function Pregister({ route, navigation }) {
    //

    return(
        <View>
            <Text>
            Values passed from First page: {route.params.paramKey}    
            </Text>
        </View>
    );
}