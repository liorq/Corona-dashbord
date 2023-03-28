import { Component, Input } from '@angular/core';
import { lightsLinks } from 'src/app/data/app.arrays';
import {  lightsObj } from 'src/app/data/app.data-visualization';
import { DataVisualObj, Link } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-lights-in-settlements',
  templateUrl: './lights-in-settlements.component.html',
  styleUrls: [
    './lights-in-settlements.component.css',
    '../deads/deads.component.css',
  ],
})
export class LightsInSettlementsComponent {
  links:Link[] = lightsLinks;

  @Input()visObjsArray:DataVisualObj[]=lightsObj;

}
