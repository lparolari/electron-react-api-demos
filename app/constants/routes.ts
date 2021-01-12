export function getDefaultRouteName(r: string) {
  let s = r;
  s = s.replaceAll('/', ' ');
  s = s.replaceAll('-', ' ');
  s = s.trim();
  return s;
}

export default function routes() {
  return {
    home: () => '/home',
    window: () => ({
      main: () => '/window',
      new: () => '/window/new',
      frameless: () => '/window/frameless',
      managed: () => '/window/managed',
      events: () => '/window/events',
    }),
    menu: () => '/menu',
    nativeUI: () => '/native-ui',
    communication: () => '/communication',
    system: () => '/system',
    media: () => '/media',
    about: () => '/about',
  };
}

export function routeName(r: string) {
  if (r === routes().home()) return 'Home';
  if (r === routes().window().main()) return 'Finestre';
  if (r === routes().menu()) return 'Menu';
  if (r === routes().nativeUI()) return 'Interfaccia nativa';
  if (r === routes().communication()) return 'Comunicazione';
  if (r === routes().system()) return 'Sistema';
  if (r === routes().media()) return 'Media';
  if (r === routes().about()) return 'About';

  return getDefaultRouteName(r);
}
