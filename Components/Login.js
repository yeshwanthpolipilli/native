import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('yeshwanth');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // For demo purposes, let's just log the username and password
  };

  const onChangeText = () => {
    setUsername('charan');
    setPassword('newPassword'); // Example: Setting a new password
  };

  return (

 
    <View style={styles.container}>
  {/* <Image
  style={styles.tinyLogo}
  source={{uri:'https://i.redd.it/55ep4ba14o4b1.jpg'}} // Adjust the path as needed
/> */}
    <Image
      style={styles.tinyLogo}
      source={require('../assets/Images/imageee.jpg')} // Adjust the path as needed
     // Adjust dimensions as needed
    />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      /> 
 
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Button title="Change Values" onPress={onChangeText} />
        <Button
        title="Go front"
        onPress={() => navigation.navigate('Main')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  imageStyle: {
    width: 200, // Adjust as needed
    height: 200, // Adjust as needed
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;


