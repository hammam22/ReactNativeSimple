import { View, Text, Button, StyleSheet} from "react-native";
import { getAuth } from "firebase/auth";
import { StackActions } from '@react-navigation/native';



export default function Phome({ route, navigation }) {
    //

    const auth = route.params.auth;
    const doLogout = function (){
        auth.signOut
        navigation.dispatch(
            StackActions.replace(
              'login',
            )
            );
    }

    return(
        
        <View style={Styles.main}>
            <Text>
            Values passed from First page: {route.params.paramKey}    
            </Text>


            {/*
                    <Text>
                    User: {route.params.auth.currentUser.email}    
                    </Text>
            */}
            
            

            <View>
                <Button title='log out' onPress={doLogout}/>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        justifyContent: 'space-around',
    },
});