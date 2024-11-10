/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import DoForm from './ToDoForm';
import DoList from './ToDoList';
import { SafeAreaView} from 'react-native';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
  // Implement the logic to add a new task
  setTasks([...tasks, taskText]);
};

  return (
    <SafeAreaView>
      <DoList tasks = {tasks}/>
      <DoForm addTask={addTask}/>
    </SafeAreaView>
  );
}


export default App;
