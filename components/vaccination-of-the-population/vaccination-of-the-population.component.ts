import { Component, Input } from '@angular/core';
import { links4, tableData2 } from 'src/app/data/app.arrays';
import { arrayOfVisualizationObjects10 } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-vaccination-of-the-population',
  templateUrl: './vaccination-of-the-population.component.html',
  styleUrls: [
    './vaccination-of-the-population.component.css',
    '../deads/deads.component.css',
  ],
})
export class VaccinationOfThePopulationComponent {
  tableData2 = tableData2;
  links = links4;
  selectedOption: string = 'כלל הישובים';
  @Input()arrayOfVisualizationObjects=arrayOfVisualizationObjects10;

}
