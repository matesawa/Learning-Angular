import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTab: Number = 1;

  changeNav(tab: number) {
    this.currentTab = tab;
  }
}
