import { Menu, remote } from 'electron';

function makeMenu(): Menu {
  const menu = new remote.Menu();

  const sep = new remote.MenuItem({ type: 'separator' });

  menu.append(new remote.MenuItem({ label: 'Ciao' }));
  menu.append(sep);
  menu.append(
    new remote.MenuItem({ label: 'Electron', type: 'checkbox', checked: true })
  );
  menu.append(sep);
  menu.append(
    new remote.MenuItem({ label: 'React', type: 'radio', checked: true })
  );
  menu.append(
    new remote.MenuItem({ label: 'JavaScript', type: 'radio', checked: false })
  );

  return menu;
}

const menu = makeMenu();

export default menu;
