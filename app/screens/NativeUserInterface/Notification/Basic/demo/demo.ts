export default function sendBasicNotification() {
  // eslint-disable-next-line no-new
  new window.Notification('Notifica di base', {
    body:
      "Le notifiche sono uno strumento molto potente per notificare all'utente il completamento di un task in background",
  });
}
