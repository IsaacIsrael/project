export interface HermesInternalType {
  /**
   * Query the VM for any sort of runtime properties that it wants to report.
   * There are no guarantees about what keys exist in it, but they can be
   * printed for informational purposes.
   * @return An object that maps strings to various types of runtime properties.
   */
  getRuntimeProperties?: () => {
    Build: string;
    'OSS Release Version': string;
    [string]: mixed;
  };
}
