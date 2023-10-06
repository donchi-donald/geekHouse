import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://afrogeekacademy.com/assets/learn/img/';

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Pixel Palace',
      city: 'Yaoundé',
      state: 'Centre',
      photo: `${this.baseUrl}/1.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: "Coder's Cove",
      city: 'Douala',
      state: 'Littoral',
      photo: `${this.baseUrl}/2.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Byte Bungalow',
      city: 'Bamenda',
      state: 'Northwest',
      photo: `${this.baseUrl}/3.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Algorithm Apartments',
      city: 'Buea',
      state: 'Southwest',
      photo: `${this.baseUrl}/4.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Bitstream Bunkers',
      city: 'Kribi',
      state: 'South',
      photo: `${this.baseUrl}/5.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Debug Dwellings',
      city: 'Ngaoundéré',
      state: 'Adamawa',
      photo: `${this.baseUrl}/6.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Script Suites',
      city: 'Garoua',
      state: 'Far North',
      photo: `${this.baseUrl}/8.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Syntax Sanctuary',
      city: 'Limbe',
      state: 'Southwest',
      photo: `${this.baseUrl}/9.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Hackers Haven',
      city: 'Foumban',
      state: 'West',
      photo: `${this.baseUrl}/10.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Logic Lofts',
      city: 'Ebolowa',
      state: 'South',
      photo: `${this.baseUrl}/7.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  deleteHousingLocationById(id: number): void {
    const index = this.housingLocationList.findIndex(
      (housingLocation) => housingLocation.id === id
    );
    if (index !== -1) {
      this.housingLocationList.splice(index, 1);
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

}
