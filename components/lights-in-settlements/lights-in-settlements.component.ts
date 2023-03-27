import { Component, Input } from '@angular/core';
import { lightslinks } from 'src/app/data/app.arrays';
import {  lightsObj } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-lights-in-settlements',
  templateUrl: './lights-in-settlements.component.html',
  styleUrls: [
    './lights-in-settlements.component.css',
    '../deads/deads.component.css',
  ],
})
export class LightsInSettlementsComponent {
  linksListData = lightslinks;

  @Input()arrayOfVisualizationObjects=lightsObj;

}
