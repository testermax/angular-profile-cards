import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileCard2Component } from './components/profile-card2/profile-card2.component';
import { ProfileCard3Component } from './components/profile-card3/profile-card3.component';
import { ProfileCard4Component } from './components/profile-card4/profile-card4.component';
import { ProfileCard5Component } from './components/profile-card5/profile-card5.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCardComponent,
    ProfileCard2Component,
    ProfileCard3Component,
    ProfileCard4Component,
    ProfileCard5Component,
  ],
  template: `
  <div style="display: flex; flex-wrap: wrap;"> 
  <div *ngFor = "let i of emps"> 
  <app-profile-card5> </app-profile-card5>
  </div></div>
 
  <br>

  <div style="display: flex; flex-wrap: wrap;"> 
  <div *ngFor = "let i of emps"> 
  <app-profile-card4> </app-profile-card4>
  </div>    </div>

  `,
})
export class App {
  name = 'Angular';

  emps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

bootstrapApplication(App);
