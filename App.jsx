import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 导入页面组件
import HomeScreen from './src/screens/HomeScreen'; // 确保路径正确
import AboutScreen from './src/screens/AboutScreen'; // 假设 About 页面存在

function App() {
  // 创建导航堆栈
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* 注册 HomeScreen 和 AboutScreen */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Page' }} // 设置页面标题
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'About Us' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
