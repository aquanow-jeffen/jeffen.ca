/***********************************************************
 * App Modules
 ************************************************************/
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';

/***********************************************************
 * Services
 ************************************************************/
import { HttpClientService } from './services/httpClient.service';
import { StartupService } from './services/startup.service';

/***********************************************************
 * JWT Options
 ************************************************************/
/*export function jwtOptionsFactory() {
  return {
    tokenGetter: () => localStorage.getItem('token'),
    whitelistedDomains: ['localhost:4300', 'bd.ottpay.com', 'bdtest.ottpay.com', '192.168.2.5:8033'],
    authScheme: ''
  };
}*/

// *****************************************************************
// * Initializer
// ****************************************************************
export function onAppInit(startup: StartupService): () => Promise<any> {
  return () => startup.onLoad();
}

// *****************************************************************
// * Export module
// ****************************************************************
@NgModule({
  imports: [
    HttpClientModule,
    /*JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    })*/
  ],
  exports: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: onAppInit,
          multi: true,
          deps: [StartupService]
        },
        HttpClientService,
        StartupService,
      ]
    };
  }
}
