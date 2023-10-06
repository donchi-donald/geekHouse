import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
   this.housingService.getAllHousingLocations().then( (housingLocationList: HousingLocation[]) => {
      this.housingService.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
    this.filteredLocationList = this.housingService.housingLocationList;
  }

  deleteHousingLocation(i: number) {
    this.housingService.deleteHousingLocationById(i);
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingService.housingLocationList;
    }
  
    this.filteredLocationList = this.housingService.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
