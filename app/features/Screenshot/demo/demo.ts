import { remote, shell } from 'electron';
import path from 'path';
import os from 'os';
import fs from 'fs';

const screenshotPath = path.join(os.tmpdir(), 'screenshot.png');

const determineScreenShotSize = () => {
  const screenSize = remote.screen.getPrimaryDisplay().workAreaSize;
  const maxDimension = Math.max(screenSize.width, screenSize.height);
  return {
    width: maxDimension * window.devicePixelRatio,
    height: maxDimension * window.devicePixelRatio,
  };
};

const saveImage = (pathToScreenshot: string) => (img: Electron.NativeImage) => {
  fs.writeFile(pathToScreenshot, img.toPNG(), 'base64', (err) => {
    if (err) throw err;
  });

  return pathToScreenshot;
};

const showImage = (pathToScreenshot: string) => {
  shell.openExternal(`file://${pathToScreenshot}`);
  return pathToScreenshot;
};

export default function captureScreenshot() {
  const { width, height } = determineScreenShotSize();

  return remote
    .getCurrentWebContents()
    .capturePage({ x: 0, y: 0, width, height })
    .then(saveImage(screenshotPath))
    .then(showImage)
    .catch(() =>
      remote.dialog.showErrorBox(
        'Errore',
        'Si è verificato un errore durante la cattura della schermata.'
      )
    );
}
