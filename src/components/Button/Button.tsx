/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type MyButtonProps = {
  readonly onPress?: () => void;
  readonly text: string;
};

const MyButton: React.FC<MyButtonProps> = ({ onPress, text }: MyButtonProps) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: 'white',
  },
});
