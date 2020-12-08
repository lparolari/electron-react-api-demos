export type Home = '/';
export type Window = '/window';
export type Menu = '/menu';
export type NativeUI = '/native-ui';
export type Communication = '/communication';
export type System = '/system';
export type Media = '/media';

export const home: Home = '/';
export const window: Window = '/window';
export const menu: Menu = '/menu';
export const nativeUi: NativeUI = '/native-ui';
export const communication: Communication = '/communication';
export const system: System = '/system';
export const media: Media = '/media';

export type Route =
  | Home
  | Window
  | Menu
  | NativeUI
  | Communication
  | System
  | Media;
export type Routes = {
  HOME: Home;
  WINDOW: Window;
  MENU: Menu;
  NATIVE_UI: NativeUI;
  COMMUNICATION: Communication;
  SYSTEM: System;
  MEDIA: Media;
};

export type Name = string;

const routes: Routes = {
  HOME: home,
  WINDOW: window,
  MENU: menu,
  NATIVE_UI: nativeUi,
  COMMUNICATION: communication,
  SYSTEM: system,
  MEDIA: media,
};

export default routes;

export function routeName(r: string): Name {
  if (r === home) return 'Home';
  if (r === window) return 'Finestre';
  if (r === menu) return 'Menu';
  if (r === nativeUi) return 'Interfaccia nativa';
  if (r === communication) return 'Comunicazione';
  if (r === system) return 'Sistema';
  if (r === media) return 'Media';

  return 'Route not found';
}
