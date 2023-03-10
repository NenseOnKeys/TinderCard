import React from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import Card from './src/components/TinderCard';
import user from './assets/data/users';

const App = () => {
  return(
    <View style={styles.pageContainer}>
      <Card user={user[3]}/>
    </View>
  
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});

export default App;
