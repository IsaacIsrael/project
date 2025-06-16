import { Platform } from 'react-native';

export default function assertionIfAndroid(assertion: () => void): void {
  if (Platform.OS === 'android') {
    assertion();
  }
}
