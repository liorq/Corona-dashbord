import { Component, Input } from '@angular/core';
import { majorIndicatorsObj } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-major-indicators',
  templateUrl: './major-indicators.component.html',
  styleUrls: ['./major-indicators.component.css'],
})
export class MajorIndicatorsComponent {

  ///visObjsArray
  @Input()visObjsArray=majorIndicatorsObj;



}
