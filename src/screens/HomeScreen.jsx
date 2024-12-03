import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import DoList from '../components/ToDoList';
import DoForm from '../components/ToDoForm';

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <DoList tasks={tasks} />
        <DoForm addTask={addTask} />
      </SafeAreaView>
      <View style={styles.spacer} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  spacer: {
    height: 20,
  },
});

export default HomeScreen;
