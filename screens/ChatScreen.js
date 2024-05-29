import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import logo from "../assets/images/logo.png";
import BG from '../assets/images/R.jpg'; // Ensure the path is correct
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get("window").width;

const ChatScreen = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const navigation = useNavigation();

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'calls') {
      navigation.navigate('CallScreen');
    } else if (tabName === 'chat') {
      navigation.navigate('ChatScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={BG} resizeMode="cover" style={[styles.BGimage, { width: screenWidth }]} />
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.profileIconContainer}>
          <MaterialIcons name="person" size={24} color="#fff" style={styles.profileIcon} />
        </TouchableOpacity>
        <View style={styles.sectionBorder}>
          <TouchableOpacity
            style={[styles.sectionContainer, activeTab === 'chat' ? styles.activeTab : styles.nonActiveTab]}
            onPress={() => handleTabPress('ChatScreen')}
          >
            <MaterialIcons name="chat" size={24} color="#fff" style={[styles.sectionIcon, styles.sectionIconFirst]} />
            <Text style={styles.sectionText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sectionContainer, activeTab === 'calls' ? styles.activeTab : styles.nonActiveTab]}
            onPress={() => handleTabPress('CallScreen')}
          >
            <MaterialIcons name="call" size={24} color="#fff" style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Calls</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 0, // Shift inputs and button slightly towards the top
    position: 'relative',
  },
  profileIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'purple',
    borderRadius: 50,
    padding: 8,
  },
  profileIcon: {
    borderRadius: 50,
  },
  sectionBorder: {
    width: "40%",
    height: 40,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginBottom: 790,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: 'purple',
  },
  nonActiveTab: {
    backgroundColor: 'gray',
  },
  sectionIcon: {
    marginRight: 5,
    color: 'black',
  },
  sectionIconFirst: {
    marginLeft: 5,
    color: 'black',
  },
  sectionText: {
    fontSize: 18,
    color: 'black',
  },
});
