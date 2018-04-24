// *****************************************************************
// * System imports
// ****************************************************************
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from '@env/environment';

// *****************************************************************
// * components and directives
// ****************************************************************
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';

// *****************************************************************
// * modules
// ****************************************************************
import { CoreModule } from '@app/core';
import { AppRoutingModule } from './app.routing';
import { BlogModule } from './blog/blog.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { MaterialModule, HeaderModule, FooterModule } from '@app/shared';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    // system imports
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // app modules
    CoreModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    // 3rd party
    MaterialModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
