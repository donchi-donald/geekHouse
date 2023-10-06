import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  housingLocationList: HousingLocation[] = [];
  
  readonly baseUrl = 'http://localhost:3000/locations';


  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.baseUrl);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return await data.json() ?? {};
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
