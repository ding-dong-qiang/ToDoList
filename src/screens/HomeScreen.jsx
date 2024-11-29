import React, { useState } from 'react';
import { Button, SafeAreaView } from 'react-native';
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
      {/* 任务列表和任务表单 */}
      <SafeAreaView>
        <DoList tasks={tasks} />
        <DoForm addTask={addTask} />
      </SafeAreaView>

      {/* 导航按钮 */}
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
}

export default HomeScreen;
