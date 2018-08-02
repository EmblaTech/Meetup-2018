import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { PlaceComponent } from './add-friend/place/place.component';

import * as Raven from 'raven-js';
import { environment } from '../environments/environment';

Raven
  .config('https://383ba47575a3403084ee7e33e5ba0205@sentry.io/1249659',
    {
      environment: environment.version.env,
      release: `${environment.version.tunnel}-${environment.version.version}`
    })
  .install();


export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err);
    Raven.showReportDialog();
    if (!environment.production) {
      // log error in console
      console.error(err);
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
