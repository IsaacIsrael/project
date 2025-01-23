import getDevServer from '@services/getDevServer';

export default function openURLInBrowser(url: string): void {
  fetch(getDevServer().url + 'open-url', {
    body: JSON.stringify({ url }),
    method: 'POST',
  });
}
