import { remote } from 'electron';

export default function openSuccessDialog() {
  remote.dialog.showMessageBox({
    type: 'info',
    message: 'Successo!',
    detail: 'Hai premuto la scorciatoia da tastiera registrata.',
    buttons: ['OK'],
  });
}
