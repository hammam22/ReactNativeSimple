import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.page1}
      >
        <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Text
            style={styles.txtWelcome}
            >Welcome to the App</Text>
        </View>
        </View>
      <View 
      style={styles.page2}
      >
        <View>
        <Text style={styles.txtInput}>Email</Text>
        </View>
        <TextInput
        style={styles.inputMail}
        backgroundColor={'#fff'}
        ></TextInput>


<View>
        <Text style={styles.txtInput}>Password</Text>
        </View>
        <TextInput
        secureTextEntry
        style={styles.inputPass}
        backgroundColor={'#fff'}
        ></TextInput>
      </View>

      <View style={styles.page4}>
      <TouchableOpacity
        style={{
            width: 200,
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius: 15,
            padding: 7,
          }}
        >
          <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
          }}
          >Login</Text>
        </TouchableOpacity>


        <TouchableOpacity>
          <Text style={{textAlign: 'center'}}>Don't have account already?{"\n"}Signup!!
          </Text>
        </TouchableOpacity>
      </View>

        

      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page1: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth:'100%',
  },
  page2: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 30,
    minWidth:'100%',
  },
  page3: {
    flex: 2,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignContent: 'flex-end',
    padding: 30,
  },
  page4: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputMail: {
    height: 50,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 26,
  },
  inputPass: {
    height: 50,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 26,
    
  },
  txtWelcome: {
    fontSize: 40,
    fontWeight: "bold",
  },
  txtInput: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
