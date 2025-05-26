import { TurboModuleRegistry } from 'react-native';

import type { TurboModule } from 'react-native';

interface SourceCodeConstants {
  scriptURL: null | string;
}

interface Spec extends TurboModule {
  getConstants: () => SourceCodeConstants;
}

const NativeModule = TurboModuleRegistry.getEnforcing<Spec>('SourceCode');
let constants: null | SourceCodeConstants = null;

const NativeSourceCode = {
  getConstants(): SourceCodeConstants {
    if (constants == null) {
      constants = NativeModule.getConstants();
    }

    return constants;
  },
};

export default NativeSourceCode;
