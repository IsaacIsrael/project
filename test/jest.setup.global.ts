/* eslint-disable @typescript-eslint/no-explicit-any */
import assertionIfAndroid from './assertions/assertionIfAndroid';
import assertionIfIOS from './assertions/assertionIfIOS';
import describeAction from './describes/describeAction';
import describeScreen from './describes/describeScreen';
import describeSelector from './describes/describeSelector';
import describeSlice from './describes/describeSlice';
import platform from './test/platform';

(global as any).describeAction = describeAction;
(global as any).describeScreen = describeScreen;
(global as any).describeSelector = describeSelector;
(global as any).describeSlice = describeSlice;
(global as any).assertionIfAndroid = assertionIfAndroid;
(global as any).assertionIfIOS = assertionIfIOS;
(global as any).test.platform = platform;
(global as any).it = (global as any).test;

(global as any).HermesInternal = {
  getRuntimeProperties: jest.fn().mockReturnValue({
    'OSS Release Version': '1.0.0',
  }),
};
