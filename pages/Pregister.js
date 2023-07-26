import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { useBackHandler } from '@react-native-community/hooks';
import { StackActions } from '@react-navigation/native';


export default function Prgister({ navigation }){


    useBackHandler(() => {
        navigation.dispatch(
            StackActions.replace(
              'login',
            )
            );
        return true;
      })

    

    return(
        <View style={styles.main}>
            <Text>
                register page
            </Text>

            <TextInput
            placeholder='Email'/>
            <TextInput
            placeholder='Password 1'/>
            <TextInput
            placeholder='Password 2'/>

<TouchableOpacity
        onPress={()=>{navigation.dispatch(
          StackActions.replace('home',{paramKey: 'ss2222',})
        );
      }}
        >
          <Text 
           style={{textAlign: 'center'}}>
            SignUp
          </Text>
        </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 40,
    },
});