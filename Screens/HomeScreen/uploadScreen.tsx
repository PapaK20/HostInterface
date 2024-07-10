import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UploadScreen = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.Container}>
        <TouchableOpacity >
        <Text></Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FF0000 ',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadScreen;
