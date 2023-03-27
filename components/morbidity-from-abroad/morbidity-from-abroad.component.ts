import { Component, Input } from '@angular/core';
import { linksData2 } from 'src/app/data/app.arrays';
import { arrayOfVisualizationObjects4 } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-morbidity-from-abroad',
  templateUrl: './morbidity-from-abroad.component.html',
  styleUrls: [
    './morbidity-from-abroad.component.css',
    '../deads/deads.component.css',
  ],
})
export class MorbidityFromAbroadComponent {
   links = linksData2;
  @Input()arrayOfVisualizationObjects=arrayOfVisualizationObjects4;

  // arrayOfVisualizationObjects4
}
