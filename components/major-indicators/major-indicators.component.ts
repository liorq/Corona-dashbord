import { Component, Input } from '@angular/core';
import { arrayOfVisualizationObjects } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-major-indicators',
  templateUrl: './major-indicators.component.html',
  styleUrls: ['./major-indicators.component.css'],
})
export class MajorIndicatorsComponent {
  @Input()arrayOfVisualizationObjects=arrayOfVisualizationObjects;



}
