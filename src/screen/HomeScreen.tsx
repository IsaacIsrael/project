/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

import DebugInstructions from '@components/DebugInstructions';
import Header from '@components/Header';
import LinkList from '@components/LinkList';
import ReloadInstructions from '@components/ReloadInstructions';
import Section from '@components/Sections';
import Colors from '@styles/colors';

const HomeScreen = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView contentInsetAdjustmentBehavior={'automatic'} style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={'Step One'}>
            {'Edit '}
            <Text style={styles.highlight}>{'App.tsx'}</Text> {'to change this screen and then come back to see your'}
            {'edits.'}
          </Section>
          <Section title={'See Your Changes'}>
            <ReloadInstructions />
          </Section>
          <Section title={'Debug'}>
            <DebugInstructions />
          </Section>
          <Section title={'Learn More'}>{'Read the docs to discover what to do next:'}</Section>
          <LinkList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
