import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyButton from './Button';

import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

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

export const Basic: Story = {
  args: {
    onPress: fn(),
    testID: 'my-button',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId(args.testID ?? '');

    expect(button).toBeTruthy();
    await step('button arguments', async () => {
      expect(button).toHaveTextContent(args.text);
    });

    await step('click on button', async () => {
      await userEvent.click(button);
    });
    await waitFor(() => expect(args.onPress).toHaveBeenCalled());
  },
};

export const AnotherExample: Story = {
  args: {
    onPress: fn(),
    testID: 'another-button',
    text: 'Another example',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId(args.testID ?? '');

    expect(button).toBeTruthy();

    await step('button arguments', async () => {
      expect(button).toHaveTextContent(args.text);
    });

    await step('click on button', async () => {
      await userEvent.click(button);
    });
    await waitFor(() => expect(args.onPress).toHaveBeenCalled());
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 16,
  },
});
