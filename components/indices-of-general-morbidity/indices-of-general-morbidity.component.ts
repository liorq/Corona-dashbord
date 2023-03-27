import { Component, Input } from '@angular/core';
import {  arrayOfVisualizationObjects2 } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-indices-of-general-morbidity',
  templateUrl: './indices-of-general-morbidity.component.html',
  styleUrls: [
    './indices-of-general-morbidity.component.css',
    '../deads/deads.component.css',
  ],
})
export class IndicesOfGeneralMorbidityComponent {
  @Input()arrayOfVisualizationObjects=arrayOfVisualizationObjects2;


}
