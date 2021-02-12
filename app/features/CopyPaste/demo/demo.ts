import { clipboard } from 'electron';

function copy(s: string) {
  clipboard.writeText(s);
  return s;
}

function paste() {
  return clipboard.readText();
}

export { copy, paste };
