import React from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';  // 确保路径正确

function AboutScreen({ navigation }) {
    return (
        <MainLayout>
            {/* 你可以在这里添加其他内容 */}
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
    );
}

export default AboutScreen;
