import { remote } from 'electron';
import { join } from 'path';

export default function path(p: string) {
  const appPath = `${remote.app.getAppPath()}`;
  return join(appPath, p);
}
