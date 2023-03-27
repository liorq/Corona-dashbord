import { Component, Input } from '@angular/core';
import { Vacclinks } from 'src/app/data/app.arrays';
import { vaccPopObj } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-vaccination-of-the-population',
  templateUrl: './vaccination-of-the-population.component.html',
  styleUrls: [
    './vaccination-of-the-population.component.css',
    '../deads/deads.component.css',
  ],
})
export class VaccinationOfThePopulationComponent {
  links = Vacclinks;
  @Input()arrayOfVisualizationObjects=vaccPopObj;

}
