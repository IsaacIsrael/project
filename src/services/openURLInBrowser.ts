import getDevServer from '@services/getDevServer';

export default function openURLInBrowser(url: string) {
  fetch(getDevServer().url + 'open-url', {
    method: 'POST',
    body: JSON.stringify({ url }),
  });
}
