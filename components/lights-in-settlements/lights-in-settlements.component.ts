import { Component, Input } from '@angular/core';
import { linksListData, tableData1 } from 'src/app/data/app.arrays';
import { arrayOfVisualizationObjects11 } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-lights-in-settlements',
  templateUrl: './lights-in-settlements.component.html',
  styleUrls: [
    './lights-in-settlements.component.css',
    '../deads/deads.component.css',
  ],
})
export class LightsInSettlementsComponent {
  tableData1 = tableData1;
  linksListData = linksListData;
  selectedOption: string = 'כלל הישובים';
  @Input()arrayOfVisualizationObjects=arrayOfVisualizationObjects11;

}
