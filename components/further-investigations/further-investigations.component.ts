import { Component, Input } from '@angular/core';
import { getFurthersGraph } from 'src/app/data/app.graphData';
import { GeneralService } from 'src/app/services/general-info.service';
import { FurtherLinks } from 'src/app/data/app.arrays';
import { GraphsService } from 'src/app/services/graphs.service';
import { FurtherObj } from 'src/app/data/app.data-visualization';
import { DataVisualObj, Link } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-further-investigations',
  templateUrl: './further-investigations.component.html',
  styleUrls: [
    './further-investigations.component.css',
    '../deads/deads.component.css',
  ],
})
export class FurtherInvestigationsComponent {
  option?: echarts.EChartsOption | any = getFurthersGraph(25, false);
  timePeriodsInDays: number = 25;
  isDarkModeActive?: boolean;
  selectedOption: string='';
  linksData:Link[] = FurtherLinks;
  @Input()visObjsArray:DataVisualObj[]=FurtherObj;

  constructor(private generalSvc: GeneralService,private graphSvc:GraphsService) {}
  ngOnInit(): void {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.graphSvc.updateDataBasedOnDarkModeActive(this,newStatus,'getFurthersGraph',1)

    });

    this.generalSvc.timePeriodsInDays.subscribe((newTimePeriods) => {
      this.graphSvc.updateDataBasedOnTimePeriods(this,"getFurthersGraph",newTimePeriods,"fourGraph",1)

    });
  }
}
