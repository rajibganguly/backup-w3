import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { W3esearviceMainService } from './services/w3esearvice-main.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
// import { HomeComponent } from './components/home/home.component';
// import { ResumeComponent } from './components/resume/resume.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { PrivacyPolicy } from './components/not-found/privacy-policy';



import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// import { ResumeviewComponent } from './components/resume/resumeview/resumeview.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GameComponent } from './landingpage/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    PrivacyPolicy,
    // SortingLatestPipe,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy}, 
    W3esearviceMainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
