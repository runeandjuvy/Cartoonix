import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('launcher');

  const renderLauncher = () => (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome to Cartoonix</Text>
      <Text style={styles.subtitle}>Offline cartoons. No ads. All fun.</Text>
      <Button title="Enter Fan Hub" onPress={() => setScreen('fanhub')} />
      <Button title="View ToonIQ Badges" onPress={() => setScreen('badges')} />
    </View>
  );

  const renderFanHub = () => (
    <ScrollView style={styles.scroll}>
      <Text style={styles.sectionTitle}>🎨 Fan Hub</Text>
      <Text style={styles.text}>Create avatars, remix shows, and explore nostalgic classics!</Text>
      <Image source={{ uri: 'https://placekitten.com/300/200' }} style={styles.image} />
      <Button title="Back to Launcher" onPress={() => setScreen('launcher')} />
    </ScrollView>
  );

  const renderBadges = () => (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>🧠 ToonIQ Badges</Text>
      <Text style={styles.text}>You’ve unlocked: “Offline Master”, “Nostalgia Seeker”</Text>
      <Button title="Back to Launcher" onPress={() => setScreen('launcher')} />
    </View>
  );

  return screen === 'launcher'
    ? renderLauncher()
    : screen === 'fanhub'
    ? renderFanHub()
    : renderBadges();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a2a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#0a0a2a',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#ffcc00',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    color: '#eee',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});
