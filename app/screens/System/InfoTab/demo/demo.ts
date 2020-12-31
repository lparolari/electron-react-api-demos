import { remote } from 'electron';
import os from 'os';

function getAppPath() {
  return remote.app.getAppPath();
}

function getElectronVersion() {
  return remote.process.versions.electron;
}

function getOsHomeDir() {
  return os.homedir();
}

function getScreenSize() {
  return remote.screen.getPrimaryDisplay().size;
}

export { getAppPath, getElectronVersion, getOsHomeDir, getScreenSize };
