import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>navigation</Text>
      </View>
      <View style={styles.body}>
        <Text>Landing screen</Text>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
