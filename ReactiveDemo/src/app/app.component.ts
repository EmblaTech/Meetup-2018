import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: '<div class="container"><h1>Reactive Form Demo</h1><app-add-friend></app-add-friend></div>',
  styleUrls: []
})
export class AppComponent {
  title = 'app';
  constructor() {
    console.log(`app running on - ${environment.version.tunnel}-${environment.version.version}`);
  }
}
