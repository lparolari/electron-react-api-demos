import { join } from 'path';

const appPath = `${__dirname}`;

export default function path(p: string) {
  return join(appPath, p);
}
