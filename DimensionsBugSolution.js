import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SafeAreaView from 'react-native-safe-area-context';

const App = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
      <View style={[styles.box, { width: dimensions.width / 2, height: dimensions.height / 4 }]}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'blue',
  },
});

export default App;