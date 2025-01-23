import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import { type HermesInternalType } from '@infra-types/Hermes';
import Colors from '@styles/colors';

const HermesBadge = (): null | React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const hermesInternal = HermesInternal as HermesInternalType;
  const version = hermesInternal?.getRuntimeProperties?.()['OSS Release Version'] ?? '';
  return hermesInternal ? (
    <View style={styles.badge}>
      <Text
        style={[
          styles.badgeText,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {`Engine: Hermes ${version}`}
      </Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: 12,
    top: 8,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
  },
});

export default HermesBadge;
