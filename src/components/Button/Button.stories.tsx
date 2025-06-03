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
    text: 'Basic',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    expect(await canvas.findByTestId(args.testID ?? '')).toBeTruthy();
    expect(await canvas.findByText(args.text)).toBeTruthy();
    expect(await canvas.findByRole('button')).toBeTruthy();

    const button = await canvas.findByRole('button');
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
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button');

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
