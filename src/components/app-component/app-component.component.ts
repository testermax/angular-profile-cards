import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { ProfileCard2Component } from '../profile-card2/profile-card2.component';
import { ProfileCard3Component } from '../profile-card3/profile-card3.component';
import { ProfileCard4Component } from '../profile-card4/profile-card4.component';
import { ProfileCard5Component } from '../profile-card5/profile-card5.component';
import { ProfileChip2Component } from '../profile-chip2/profile-chip2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCardComponent,
    ProfileCard2Component,
    ProfileCard3Component,
    ProfileCard4Component,
    ProfileCard5Component,
    ProfileChip2Component
  ],
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
