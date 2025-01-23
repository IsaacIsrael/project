import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const ReloadInstructions = (): React.JSX.Element =>
  Platform.select({
    default: (
      <Text>
        {'Double tap '}
        <Text style={styles.highlight}>{'R'}</Text> {"on your keyboard to reload your app's code."}
      </Text>
    ),
    ios: (
      <Text>
        {'Press '}
        <Text style={styles.highlight}>{'Cmd + R'}</Text> {"in the simulator to reload your app's code."}
      </Text>
    ),
  });

const styles = StyleSheet.create({
  highlight: { fontWeight: '700' },
});

export default ReloadInstructions;
