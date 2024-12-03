import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>SAIT Dong Chen</Text>
    </View>
  );
};
const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    height: 50,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainLayout;