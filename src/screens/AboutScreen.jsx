import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import MainLayout from '../layouts/MainLayout'; 


function AboutScreen({ navigation }) {
    return (
        <MainLayout>
            <Text>This is a to-do list APP!</Text>
            <View style={styles.spacer} />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
    );
}

const styles = StyleSheet.create({
  spacer: {
    height: 80,
  },
});

export default AboutScreen;
