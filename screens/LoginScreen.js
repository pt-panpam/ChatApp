import { StyleSheet, View, Text, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BG from '../assets/images/R.jpg'; // Ensure the path is correct
import logo from "../assets/images/logo.png";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth, firestoreDB } from '../config/firebase.config';
import { doc, getDoc } from 'firebase/firestore';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(firebaseAuth, email, password);
      console.log("user Id:", userCred.user?.uid);

      const userDoc = await getDoc(doc(firestoreDB, 'users', userCred.user.uid));
      if (userDoc.exists()) {
        console.log("user data", userDoc.data());
        navigation.navigate('HomeScreen');
      } else {
        setErrorMessage("Incorrect email or password. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={BG} resizeMode="cover" style={[styles.BGimage, { width: screenWidth }]} />
      <View style={styles.innerContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Welcome Back</Text>
        
        <View style={styles.inputContainer}>
          <MaterialIcons name='person' size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <MaterialIcons name='lock' size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#808080" />
          </TouchableOpacity>
        </View>
        
        {errorMessage !== "" && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp} style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Don't have an account? Sign Up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  BGimage: {
    height: 300, // Adjust as needed
  },
  innerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 0, // Shift inputs and button slightly towards the top
  },
  logo: {
    height: 80,
    width: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1.5,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontWeight: 'bold',
  },
  eyeIcon: {
    padding: 5,
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "80%",
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 20,
  },
});
