import { remote } from 'electron';

function url(part: string): string {
  const appUrl = `file://${remote.app.getAppPath()}/app.html#`;
  return `${appUrl}${part}`;
}

export default url;
