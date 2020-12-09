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
  };
}

export function routeName(r: string) {
  if (r === routes().home()) return 'Home';
  if (r === routes().window().main()) return 'Finestre';
  if (r === routes().menu()) return 'Menu';
  if (r === routes().nativeUI()) return 'Interfaccia nativa';
  // if (r === communication) return 'Comunicazione';
  // if (r === system) return 'Sistema';
  // if (r === media) return 'Media';

  return 'Route not found';
}
