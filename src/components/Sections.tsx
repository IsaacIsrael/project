import React, { type PropsWithChildren } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import Colors from '@styles/colors';

type Props = PropsWithChildren<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly Container?: React.JSXElementConstructor<any>;
  readonly testID?: string;
  readonly title: string;
}>;

const Section = ({ children, Container = Text, testID, title }: Props): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer} testID={testID}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Container
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8,
  },
});

export default Section;
