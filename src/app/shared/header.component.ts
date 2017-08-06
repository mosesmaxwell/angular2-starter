import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <section class="app-header">
    <div>{{appTitle}}</div>
  </section>
  `
})
export class HeaderComponent {
  appTitle = 'My App';
}
