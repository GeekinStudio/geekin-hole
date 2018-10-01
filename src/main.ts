import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as av from 'leancloud-storage';

av.init({
  appId: 'nG3c3PR3YqM4WxiFNWxFCsLS-gzGzoHsz',
  appKey: 'xL4ke4eMeLSYme8hF8n6iYIj'
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
