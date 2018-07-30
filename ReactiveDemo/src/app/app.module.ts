import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { PlaceComponent } from './add-friend/place/place.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
