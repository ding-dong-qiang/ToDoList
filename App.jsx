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

  return (
    <SafeAreaView>
      <DoList tasks = {tasks}/>
      <DoForm />
    </SafeAreaView>
  );
}


export default App;
