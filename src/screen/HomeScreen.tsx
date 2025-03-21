/* eslint-disable react/jsx-max-depth */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import DebugInstructions from '@components/DebugInstructions';
import Header from '@components/Header';
import LinkList from '@components/LinkList';
import ReloadInstructions from '@components/ReloadInstructions';
import Section from '@components/Sections';
import decrement from '@duckers/counter/actions/decrement.action';
import increment from '@duckers/counter/actions/increment.action';
import selectCount from '@duckers/counter/selectors/selectCount';
import selectIsOperating from '@duckers/counter/selectors/selectIsOperating';
import useAppDispatch from '@hooks/useAppDispatch';
import useAppSelector from '@hooks/useAppSelector';
import LoggerManager from '@managers/LoggerManager';
import Colors from '@styles/colors';

const HomeScreen = (): React.JSX.Element => {
  const count = useAppSelector(selectCount);
  const isLoading = useAppSelector(selectIsOperating);
  const dispatch = useAppDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleOnIncrementActionPress = async (): Promise<void> => {
    try {
      const a = await dispatch(increment(1)).unwrap();
      LoggerManager.debug('handleOnIncrementActionPress', a);
    } catch (error) {
      LoggerManager.debug('handleOnIncrementActionPress', error);
    }
  };

  const handleOnDecrementActionPress = async (): Promise<void> => {
    try {
      const a = await dispatch(decrement(1)).unwrap();
      LoggerManager.debug('handleOnDecrementActionPress', a);
    } catch (error) {
      LoggerManager.debug('handleOnDecrementActionPress', error);
    }
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
          <Section Container={View} title={'Counter'}>
            <View style={styles.counterContainer}>
              <TouchableOpacity style={styles.counterButton} onPress={handleOnDecrementActionPress}>
                <Text style={styles.counterButtonText}>{'-'}</Text>
              </TouchableOpacity>
              <Text style={styles.counterButtonText}>{isLoading ? 'Loading' : count}</Text>
              <TouchableOpacity style={styles.counterButton} onPress={handleOnIncrementActionPress}>
                <Text style={styles.counterButtonText}>{'+'}</Text>
              </TouchableOpacity>
            </View>
          </Section>
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
  counterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  counterButton: {
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    marginHorizontal: 4,
    padding: 8,
  },
  counterButtonText: {
    fontSize: 24,
  },
});

export default HomeScreen;
