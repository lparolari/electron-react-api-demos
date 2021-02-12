import { shell } from 'electron';

import os from 'os';

export default function openUserHomeInFileManager() {
  shell.showItemInFolder(os.homedir());
}
