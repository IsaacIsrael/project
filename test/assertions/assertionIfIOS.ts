/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Platform } from 'react-native';

export default function assertionIfIOS(assertion: () => void): void {
  if (Platform.OS === 'ios') {
    assertion();
  }
}
