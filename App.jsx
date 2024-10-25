/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import DoForm from './ToDoForm';
import DoList from './ToDoList';
import { SafeAreaView} from 'react-native';


function App() {
  return (
    <SafeAreaView>
      <DoList />
      <DoForm />
    </SafeAreaView>
  );
}


export default App;
