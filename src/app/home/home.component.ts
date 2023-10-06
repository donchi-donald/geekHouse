import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl = 'https://afrogeekacademy.com/assets/learn/img/';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/1.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

}
