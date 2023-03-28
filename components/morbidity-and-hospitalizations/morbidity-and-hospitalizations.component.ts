import { Component, Input } from '@angular/core';
import { HospitalObj } from 'src/app/data/app.data-visualization';
import { DataVisualObj } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-morbidity-and-hospitalizations',
  templateUrl: './morbidity-and-hospitalizations.component.html',
  styleUrls: [
    './morbidity-and-hospitalizations.component.css',
    '../deads/deads.component.css',
  ],
})
export class MorbidityAndHospitalizationsComponent {
  @Input()visObjsArray:DataVisualObj[]=HospitalObj;

}
