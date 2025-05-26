import React from 'react';

import HomeScreen from './HomeScreen';

import openURLInBrowser from '@services/openURLInBrowser';
import { fireEvent, renderWithProviders, screen, waitFor, within } from '@test-utils';

describeScreen('Home', () => {
  test('hero', () => {
    renderWithProviders(<HomeScreen />);

    const header = screen.getByTestId('new-app-screen-header');
    expect(header).toBeTruthy();
    const headerContent = within(header!);

    expect(headerContent.getByText('Welcome to\nReact Native')).toBeTruthy();
    expect(headerContent.getByText('Engine: Hermes 1.0.0')).toBeTruthy();
    const imageBackground = headerContent.getByTestId('new-app-screen-header-image');
    expect(imageBackground.props.source).toEqual(require('../assets/images/logo.png'));
  });
  test('counter sections', () => {
    renderWithProviders(<HomeScreen />);

    const counterSection = screen.getByTestId('counter');
    expect(counterSection).toBeTruthy();
    const counterSectionContent = within(counterSection!);
    expect(counterSectionContent.getByText('Counter')).toBeTruthy();

    const incrementButton = counterSectionContent.getByText('+');
    expect(incrementButton).toBeTruthy();

    const decrementButton = counterSectionContent.getByText('-');
    expect(decrementButton).toBeTruthy();
  });
  test('step one section', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('step-one');
    expect(section).toBeTruthy();
    const sectionContent = within(section!);
    expect(sectionContent.getByText('Step One')).toBeTruthy();
    expect(
      sectionContent.getByText('Edit App.tsx to change this screen and then come back to see your edits.'),
    ).toBeTruthy();
    const boldText = sectionContent.getByText('App.tsx');
    const boldTextStyle = boldText.props.style;
    const isTextBold = Array.isArray(boldTextStyle)
      ? boldTextStyle.some((style) => style?.fontWeight === '700')
      : boldTextStyle?.fontWeight === '700';
    expect(isTextBold).toBe(true);
  });
  test('learn more section', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('learn-more');
    const sectionContent = within(section!);
    expect(sectionContent.getByText('Learn More')).toBeTruthy();
    expect(sectionContent.getByText('Read the docs to discover what to do next:')).toBeTruthy();
  });
  test('basic link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('The Basics')).toBeTruthy();
    expect(sectionContent.getByText('Explains a Hello World for React Native.')).toBeTruthy();
  });
  test('style link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('Style')).toBeTruthy();
    expect(sectionContent.getByText('Covers how to use the prop named style which controls the visuals.')).toBeTruthy();
  });
  test('layout link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('Layout')).toBeTruthy();
    expect(sectionContent.getByText('React Native uses flexbox for layout, learn how it works.')).toBeTruthy();
  });
  test('components link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('Components')).toBeTruthy();
    expect(sectionContent.getByText('The full list of components and APIs inside React Native.')).toBeTruthy();
  });
  test('navigation link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('Navigation')).toBeTruthy();
    expect(sectionContent.getByText('How to handle moving between screens inside your application.')).toBeTruthy();
  });
  test('networking link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('Networking')).toBeTruthy();
    expect(sectionContent.getByText('How to use the Fetch API in React Native.')).toBeTruthy();
  });
  test('debugging link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('Debugging')).toBeTruthy();
    expect(sectionContent.getByText('Learn about the tools available to debug and inspect your app.')).toBeTruthy();
  });
  test('help link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('Help')).toBeTruthy();
    expect(
      sectionContent.getByText('Need more help? There are many other React Native developers who may have the answer.'),
    ).toBeTruthy();
  });
  test('follow us link', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('link-list');
    const sectionContent = within(section!);

    expect(sectionContent.getByText('Follow us')).toBeTruthy();
    expect(
      sectionContent.getByText(
        'Stay in touch with the community, join in on Q&As and more by following React Native on X.',
      ),
    ).toBeTruthy();
  });

  test('see your changes section', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('see-your-changes');
    const sectionContent = within(section!);
    assertionIfAndroid(() => {
      expect(sectionContent.getByText("Double tap R on your keyboard to reload your app's code.")).toBeTruthy();

      const boldText = sectionContent.getByText('R');
      const boldTextStyle = boldText.props.style;
      const isTextBold = Array.isArray(boldTextStyle)
        ? boldTextStyle.some((style) => style?.fontWeight === '700')
        : boldTextStyle?.fontWeight === '700';
      expect(isTextBold).toBe(true);
    });

    assertionIfIOS(() => {
      expect(sectionContent.getByText("Press Cmd + R in the simulator to reload your app's code.")).toBeTruthy();

      const rText = sectionContent.getByText('Cmd + R');
      const rTextStyle = rText.props.style;
      const isBold = Array.isArray(rTextStyle)
        ? rTextStyle.some((style) => style?.fontWeight === '700')
        : rTextStyle?.fontWeight === '700';
      expect(isBold).toBe(true);
    });
  });

  test('debug section', () => {
    renderWithProviders(<HomeScreen />);
    const section = screen.getByTestId('debug');
    expect(section).toBeTruthy();
    const sectionContent = within(section!);
    expect(sectionContent.getByText('Debug')).toBeTruthy();

    assertionIfAndroid(() => {
      expect(sectionContent.getByText('Press Cmd or Ctrl + M or Shake your device to open the Dev Menu.')).toBeTruthy();
      const boldText1 = sectionContent.getByText('Cmd or Ctrl + M');
      const boldText1Style = boldText1.props.style;
      const isText1Bold = Array.isArray(boldText1Style)
        ? boldText1Style.some((style) => style?.fontWeight === '700')
        : boldText1Style?.fontWeight === '700';
      expect(isText1Bold).toBe(true);
    });

    assertionIfIOS(() => {
      expect(
        sectionContent.getByText('Press Cmd + D in the simulator or Shake your device to open the Dev Menu.'),
      ).toBeTruthy();
      const boldText1 = sectionContent.getByText('Cmd + D');
      const boldText1Style = boldText1.props.style;
      const isText1Bold = Array.isArray(boldText1Style)
        ? boldText1Style.some((style) => style?.fontWeight === '700')
        : boldText1Style?.fontWeight === '700';
      expect(isText1Bold).toBe(true);
    });

    const boldText2 = sectionContent.getByText('Shake');
    const boldText2Style = boldText2.props.style;
    const isText2Bold = Array.isArray(boldText2Style)
      ? boldText2Style.some((style) => style?.fontWeight === '700')
      : boldText2Style?.fontWeight === '700';
    expect(isText2Bold).toBe(true);
  });

  test('increments the counter asynchronously', async () => {
    const { store } = renderWithProviders(<HomeScreen />);
    fireEvent.press(screen.getByText('+'));

    await waitFor(() => {
      const state = store.getState();
      expect(state.counter.value).toBe(1);
    });
  });

  test('decrements the counter asynchronously', async () => {
    const { store } = renderWithProviders(<HomeScreen />, {
      preloadedState: {
        counter: { status: 'idle', value: 1 },
      },
    });
    fireEvent.press(screen.getByText('-'));

    await waitFor(() => {
      const state = store.getState();
      expect(state.counter.value).toBe(0);
    });
  });

  test('shows loading state when performing a count action', () => {
    renderWithProviders(<HomeScreen />, {
      preloadedState: {
        counter: { status: 'loading', value: 0 },
      },
    });
    expect(screen.getByText('Loading')).toBeTruthy();
  });

  test('open link', () => {
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

    links.forEach(({ link, title }) => {
      fireEvent.press(screen.getByText(title));
      expect(openURLInBrowser).toHaveBeenCalledWith(link);
    });
  });
});
