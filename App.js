import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, 'ini email');
  console.log(password, 'ini password');

  const fungsiLogin = () => {
    console.log(typeof password);
    if (email == 'geovrisco' && password === 12345) {
      Alert.alert('Sukses', `Selamat datang : ${email}`);
    } else {
      Alert.alert('Error', `email ${email} tidak terdaftar`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => fungsiLogin()}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <View style={styles.otherButtonContainer}>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.textRegister}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Text style={styles.textGoogle}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.textForgotPassword}>Forgot Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6a81a8',
  },
  textInput: {
    fontSize: 15,
    borderBottomWidth: 1,
    width: (width * 65) / 100,
    borderColor: '#b4bcc7',
    color: '#000',
    marginVertical: 10,
    paddingBottom: 1,
  },
  buttonLogin: {
    backgroundColor: '#7f91b5',
    width: width * 0.68,
    paddingVertical: height * 0.015,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonRegister: {
    borderColor: '#244ed5',
    width: width * 0.68,
    paddingVertical: height * 0.015,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonGoogle: {
    borderColor: '#aa1115',
    width: width * 0.68,
    paddingVertical: height * 0.015,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  textLogin: {
    fontWeight: 'bold',
    color: '#fff',
  },
  textGoogle: {
    fontWeight: 'bold',
    color: '#aa1115',
  },
  textRegister: {
    fontWeight: 'bold',
    color: '#244ed5',
  },
  buttonContainer: {
    height: height * 0.3,
    justifyContent: 'space-evenly',
  },
  textForgotPassword: {
    // color: '#ccd2dc',
    color: '#ababab',
  },
});

export default App;
