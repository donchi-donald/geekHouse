import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  @Output() onDelete = new EventEmitter();

  delete(i: number) {
    this.onDelete.emit(i);
  }

}
