import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

import openURLInBrowser from '@services/openURLInBrowser';
import Colors from '@styles/colors';

const links = [
  {
    id: 1,
    description: 'Explains a Hello World for React Native.',
    link: 'https://reactnative.dev/docs/tutorial',
    title: 'The Basics',
  },
  {
    id: 2,
    description: 'Covers how to use the prop named style which controls the visuals.',
    link: 'https://reactnative.dev/docs/style',
    title: 'Style',
  },
  {
    id: 3,
    description: 'React Native uses flexbox for layout, learn how it works.',
    link: 'https://reactnative.dev/docs/flexbox',
    title: 'Layout',
  },
  {
    id: 4,
    description: 'The full list of components and APIs inside React Native.',
    link: 'https://reactnative.dev/docs/components-and-apis',
    title: 'Components',
  },
  {
    id: 5,
    description: 'How to handle moving between screens inside your application.',
    link: 'https://reactnative.dev/docs/navigation',
    title: 'Navigation',
  },
  {
    id: 6,
    description: 'How to use the Fetch API in React Native.',
    link: 'https://reactnative.dev/docs/network',
    title: 'Networking',
  },
  {
    id: 7,
    description: 'Learn about the tools available to debug and inspect your app.',
    link: 'https://facebook.github.io/react-native/docs/debugging',
    title: 'Debugging',
  },
  {
    id: 8,
    description: 'Need more help? There are many other React Native developers who may have the answer.',
    link: 'https://facebook.github.io/react-native/help',
    title: 'Help',
  },
  {
    id: 9,
    description: 'Stay in touch with the community, join in on Q&As and more by following React Native on X.',
    link: 'https://x.com/reactnative',
    title: 'Follow us',
  },
];

const LinkList = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container} testID={'link-list'}>
      {links.map(({ id, description, link, title }) => (
        <Fragment key={id}>
          <View
            style={[
              styles.separator,
              {
                backgroundColor: isDarkMode ? Colors.dark : Colors.light,
              },
            ]}
          />
          <TouchableOpacity
            accessibilityRole={'button'}
            style={styles.linkContainer}
            onPress={() => openURLInBrowser(link)}>
            <Text style={styles.link}>{title}</Text>
            <Text
              style={[
                styles.description,
                {
                  color: isDarkMode ? Colors.lighter : Colors.dark,
                },
              ]}>
              {description}
            </Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  link: {
    color: Colors.primary,
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
  },
  description: {
    flex: 3,
    fontSize: 18,
    fontWeight: '400',
    paddingVertical: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});

export default LinkList;
