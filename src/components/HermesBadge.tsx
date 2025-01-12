import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Colors from '@styles/colors';
import { type HermesInternalType } from '@infra-types/Hermes';

export default function HermesBadge(): React.JSX.Element | null {
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
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 8,
    right: 12,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
  },
});
