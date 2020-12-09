import { shell } from 'electron';

export default function openArtemisHomepageExternal() {
  shell.openExternal('https://www.nasa.gov/specials/artemis/');
}
