import { remote } from 'electron';

import openSuccessDialog from './dialog';

export default function registerDemoKeyboardShortcut() {
  remote.globalShortcut.register('CommandOrControl+Alt+K', openSuccessDialog);
}

export function unregisterDemoKeyboardShortcut() {
  remote.globalShortcut.unregister('CommandOrControl+Alt+K');
}
