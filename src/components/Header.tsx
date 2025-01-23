import React from 'react';
import { ImageBackground, StyleSheet, Text, useColorScheme } from 'react-native';

import HermesBadge from '@components/HermesBadge';
import Colors from '@styles/colors';

const Header = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      accessibilityRole={'image'}
      imageStyle={styles.logo}
      source={require('../assets/images/logo.png')}
      testID={'new-app-screen-header'}>
      <HermesBadge />
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {'Welcome to'}
        {'\n'}
        {'React Native'}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingHorizontal: 32,
    paddingTop: 96,
  },
  logo: {
    marginBottom: -192,
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;
