import { remote } from 'electron';

export default function sendBasicNotification() {
  const notification = new remote.Notification({
    title: 'Notifica di base',
    body:
      "Le notifiche sono uno strumento molto potente per notificare all'utente il completamento di un task in background",
  });

  notification.show();
}
