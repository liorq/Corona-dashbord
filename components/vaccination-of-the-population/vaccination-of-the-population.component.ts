import { Component, Input } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import { VaccPopObj } from 'src/app/data/app.data-visualization';
import { DataVisualObj } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-vaccination-of-the-population',
  templateUrl: './vaccination-of-the-population.component.html',
  styleUrls: [
    './vaccination-of-the-population.component.css',
    '../deads/deads.component.css',
  ],
})
export class VaccinationOfThePopulationComponent {
  links = VaccLinks;
  @Input()visObjsArray:DataVisualObj[]=VaccPopObj;

}
