import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first angular application!!!';

  goView(screen: string): void {
      switch (screen) {
        case 'login':

            break;
        case 'main':

            break;
        default:
      }
  }
}
