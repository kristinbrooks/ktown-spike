import { greeting } from 'mobile-pkg';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{greeting}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
