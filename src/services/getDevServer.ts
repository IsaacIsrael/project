import NativeSourceCode from '@services/NativeSourceCode';

let _cachedDevServerURL: null | string;
let _cachedFullBundleURL: null | string;
const FALLBACK = 'http://localhost:8081/';

type DevServerInfo = {
  bundleLoadedFromServer: boolean;
  fullBundleUrl?: null | string;
  url: string;
};

/**
 * Many RN development tools rely on the development server (packager) running
 * @return URL to packager with trailing slash
 */
export default function getDevServer(): DevServerInfo {
  if (_cachedDevServerURL === undefined) {
    const scriptUrl = NativeSourceCode.getConstants().scriptURL;
    const match = scriptUrl?.match(/^https?:\/\/.*?\//);
    _cachedDevServerURL = match ? match[0] : null;
    _cachedFullBundleURL = match ? scriptUrl : null;
  }

  return {
    bundleLoadedFromServer: _cachedDevServerURL !== null,
    fullBundleUrl: _cachedFullBundleURL,
    url: _cachedDevServerURL ?? FALLBACK,
  };
}
