import { TurboModule, TurboModuleRegistry } from 'react-native';

interface SourceCodeConstants {
  scriptURL: string;
}

interface Spec extends TurboModule {
  getConstants: () => SourceCodeConstants;
}

const NativeModule = TurboModuleRegistry.getEnforcing<Spec>('SourceCode');
let constants: SourceCodeConstants | null = null;

const NativeSourceCode = {
  getConstants(): SourceCodeConstants {
    if (constants == null) {
      constants = NativeModule.getConstants();
    }

    return constants;
  },
};

export default NativeSourceCode;
