import { shell } from 'electron';

export default function openArtemisHomepageExternal() {
  shell.openExternal('https://google.it');
}
