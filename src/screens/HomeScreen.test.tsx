import React from 'react';

import HomeScreen from './HomeScreen';

import { openUrlHandlerMock } from '@services/__handler__/openUrlInBrowser.handler';
import { fireEvent, renderWithProviders, screen, userEvent, waitFor } from '@test-utils';

describeScreen('Home', () => {
  test('render ', () => {
    renderWithProviders(<HomeScreen />);
    assertionIfAndroid(() => {
      expect(screen.toJSON()).toMatchSnapshot();
    });
    assertionIfIOS(() => {
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });

  test('increments the counter asynchronously', async () => {
    const { store } = renderWithProviders(<HomeScreen />, {
      preloadedState: {
        counter: { status: 'idle', value: 10 },
      },
    });

    fireEvent.press(screen.getByText('+'));

    expect(screen.getByText(/loading/i)).toBeTruthy();
    const loadingState = store.getState().counter.status;
    expect(loadingState).toBe('loading');

    await waitFor(() => {
      expect(screen.getByText(/11/i)).toBeTruthy();
    });

    const valueState = store.getState().counter.value;
    expect(valueState).toBe(11);
  });

  test('decrements the counter asynchronously', async () => {
    const { store } = renderWithProviders(<HomeScreen />, {
      preloadedState: {
        counter: { status: 'idle', value: 10 },
      },
    });
    fireEvent.press(screen.getByText('-'));

    expect(screen.getByText(/loading/i)).toBeTruthy();
    const loadingState = store.getState().counter.status;
    expect(loadingState).toBe('loading');

    await waitFor(() => {
      expect(screen.getByText(/9/i)).toBeTruthy();
    });

    const valueState = store.getState().counter.value;
    expect(valueState).toBe(9);
  });

  test('open link', async () => {
    renderWithProviders(<HomeScreen />);
    const links = [
      {
        link: 'https://reactnative.dev/docs/tutorial',
        title: 'The Basics',
      },
      {
        link: 'https://reactnative.dev/docs/style',
        title: 'Style',
      },
      {
        link: 'https://reactnative.dev/docs/flexbox',
        title: 'Layout',
      },
      {
        link: 'https://reactnative.dev/docs/components-and-apis',
        title: 'Components',
      },
      {
        link: 'https://reactnative.dev/docs/navigation',
        title: 'Navigation',
      },
      {
        link: 'https://reactnative.dev/docs/network',
        title: 'Networking',
      },
      {
        link: 'https://facebook.github.io/react-native/docs/debugging',
        title: 'Debugging',
      },
      {
        link: 'https://facebook.github.io/react-native/help',
        title: 'Help',
      },
      {
        link: 'https://x.com/reactnative',
        title: 'Follow us',
      },
    ];

    for (const [index, { link, title }] of links.entries()) {
      await userEvent.press(screen.getByText(title));

      expect(openUrlHandlerMock).toHaveBeenCalledTimes(index + 1);
      expect(openUrlHandlerMock.getMockMethod()).toEqual('POST');
      expect(await openUrlHandlerMock.getMockBody()).toEqual({ url: link });
    }
  });
});
