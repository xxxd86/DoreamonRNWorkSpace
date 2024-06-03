import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import RNDoraemonSdk from 'react-native-doraemon-sdk';
function LoginPage({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    var developerInfo = ""
    const params = {};
          const cookie = '*'
          params['cookie'] = cookie
          params['courseId'] = '*';
          params['classId'] = '*';
          params['cpi'] = '*';
          params['activeType'] = '2';
          params['code'] = '*';
          params['activeId'] = '*';
          params['url'] = '*'
        RNDoraemonSdk.SignFuntion.login(params,developerInfo).then(result =>{
            var json = JSON.parse(result)
            if(json["Net_code"] = 200){
                Alert.alert('Login Success', 'Welcome!');
            }

          }
        )
    if (username === 'admin' && password === 'admin') {
     
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginPage;
