import menu from './menu';

export default function openContextMenu() {
  menu.popup();
}

export function registerRightClickListener() {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    openContextMenu();
  });
}
