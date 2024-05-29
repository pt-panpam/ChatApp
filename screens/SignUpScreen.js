import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import logo from "../assets/images/logo.png";
import BG from '../assets/images/R.jpg'; // Ensure the path is correct
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Image source={BG} resizeMode="cover" style={[styles.BGimage, { width: screenWidth }]} />
      <View style={styles.innerContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Welcome to HomeScreen</Text>

        {/* Chat Section */}
        <TouchableOpacity style={styles.sectionContainer}>
          <MaterialIcons name='chat' size={24} color="#808080" style={styles.icon} />
          <Text style={styles.sectionText}>Chat</Text>
        </TouchableOpacity>

        {/* Call Section */}
        <TouchableOpacity style={styles.sectionContainer}>
          <MaterialIcons name='call' size={24} color="#808080" style={styles.icon} />
          <Text style={styles.sectionText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  BGimage: {
    height: 300,
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
    paddingTop: 0,
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
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  sectionText: {
    fontSize: 18,
  },
});
