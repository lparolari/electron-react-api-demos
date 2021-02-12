import path from 'path';
import { remote } from 'electron';

export default function sendAdvancedNotification() {
  const notification = new remote.Notification({
    title: 'Notifica avanzata',
    body:
      'Le notifiche possono essere personalizzate, ma il supporto cross platform è limitato',
    icon: path.join(__dirname, '../resources/img/programming.png'),
  });

  notification.show();
}
