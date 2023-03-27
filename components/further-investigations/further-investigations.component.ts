import { Component, Input } from '@angular/core';
import { getFurthersGraph } from 'src/app/data/app.graphData';
import { CoronaService } from 'src/app/services/corona.service';
import { FurtherLinks } from 'src/app/data/app.arrays';
import { GraphsService } from 'src/app/services/graphs.service';
import { FurtherObj } from 'src/app/data/app.data-visualization';

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
  linksData = FurtherLinks;
  ////FurtherObj
  @Input()visObjsArray=FurtherObj;

  constructor(private coronaSvc: CoronaService,private graphSvc:GraphsService) {}
  ngOnInit(): void {
    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.graphSvc.updateDataBasedOnDarkModeActive(this,newStatus,'4',1)

    });

    this.coronaSvc.timePeriodsInDays.subscribe((newTimePeriods) => {
      this.graphSvc.updateDataBasedOnTimePeriods(this,"4",newTimePeriods,"fourGraph",1)

    });
  }
}
