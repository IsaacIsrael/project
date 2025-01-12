import NativeSourceCode from '@services/NativeSourceCode';

let _cachedDevServerURL: string | null;
let _cachedFullBundleURL: string | null;
const FALLBACK = 'http://localhost:8081/';

type DevServerInfo = {
  url: string;
  fullBundleUrl?: string | null;
  bundleLoadedFromServer: boolean;
};

/**
 * Many RN development tools rely on the development server (packager) running
 * @return URL to packager with trailing slash
 */
export default function getDevServer(): DevServerInfo {
  if (_cachedDevServerURL === undefined) {
    const scriptUrl = NativeSourceCode.getConstants().scriptURL;
    const match = scriptUrl.match(/^https?:\/\/.*?\//);
    _cachedDevServerURL = match ? match[0] : null;
    _cachedFullBundleURL = match ? scriptUrl : null;
  }

  return {
    url: _cachedDevServerURL ?? FALLBACK,
    fullBundleUrl: _cachedFullBundleURL,
    bundleLoadedFromServer: _cachedDevServerURL !== null,
  };
}
