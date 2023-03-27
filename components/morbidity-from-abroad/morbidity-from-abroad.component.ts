import { Component, Input } from '@angular/core';
import { abroadLinks } from 'src/app/data/app.arrays';
import { abroadObj } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-morbidity-from-abroad',
  templateUrl: './morbidity-from-abroad.component.html',
  styleUrls: [
    './morbidity-from-abroad.component.css',
    '../deads/deads.component.css',
  ],
})
export class MorbidityFromAbroadComponent {
   links = abroadLinks;
  @Input()visObjsArray=abroadObj;

}
