import { registerPlugin } from '@capacitor/core';

import type { sbutilityPlugin } from './definitions';

const sbutility = registerPlugin<sbutilityPlugin>('sbutility', {
  web: () => import('./web').then(m => new m.sbutilityWeb()),
});

export * from './definitions';
export { sbutility };
