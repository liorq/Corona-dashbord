import { Component, Input } from '@angular/core';
import { titles1 } from 'src/app/data/app.arrays';
import { arrayOfVisualizationObjects3 } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-morbidity-and-hospitalizations',
  templateUrl: './morbidity-and-hospitalizations.component.html',
  styleUrls: [
    './morbidity-and-hospitalizations.component.css',
    '../deads/deads.component.css',
  ],
})
export class MorbidityAndHospitalizationsComponent {
  @Input()arrayOfVisualizationObjects=arrayOfVisualizationObjects3;

  // titles = titles1;
}
