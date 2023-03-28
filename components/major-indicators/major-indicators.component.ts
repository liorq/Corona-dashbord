import { Component, Input } from '@angular/core';
import { majorIndicatorsObj } from 'src/app/data/app.data-visualization';
import { DataVisualObj } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-major-indicators',
  templateUrl: './major-indicators.component.html',
  styleUrls: ['./major-indicators.component.css'],
})
export class MajorIndicatorsComponent {
  @Input()visObjsArray:DataVisualObj[]=majorIndicatorsObj;

}
