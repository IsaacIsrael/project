import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyButton from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  args: {
    text: 'Hello world',
  },
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  component: MyButton,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  title: 'MyButton',
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const AnotherExample: Story = {
  args: {
    text: 'Another example',
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 16,
  },
});
