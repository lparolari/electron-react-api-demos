import { shell } from 'electron';

export default function openGoogleHomepageExternal() {
  shell.openExternal('https://google.it');
}
