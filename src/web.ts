import { WebPlugin } from '@capacitor/core';

import type { sbutilityPlugin } from './definitions';

export class sbutilityWeb extends WebPlugin implements sbutilityPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
