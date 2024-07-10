import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.notbtn}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <Image source={require('@/assets/images/knust-logo.png')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>Simon Grimm</Text>
          <Ionicons name="pencil-outline" size={16} color="black" style={styles.editIcon} />
        </View>
        <Text style={styles.userEmail}>isaacoutl@gmail.com</Text>
        <Text style={styles.userSince}>Since 10/23/2023</Text>
      </View>
      
      <TouchableOpacity>
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    marginTop: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
  },
  notbtn:{
    paddingLeft: 300
  },
  profileCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontFamily: 'mon-b',
    textAlign: 'center',
  },
  editIcon: {
    marginLeft: 5,
  },
  userEmail: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginTop: 5,
    fontFamily: 'mon-sb'
  },
  userSince: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'mon'
  },
  text: {
    marginTop: 20,
    fontFamily: 'mon-sb',
    fontSize: 16
  }
});

export default ProfileScreen;
