import { Component, Input } from '@angular/core';
import { getVaccGraph } from 'src/app/data/app.graphData';
import { GeneralService } from 'src/app/services/general-info.service';
import { GraphsService } from 'src/app/services/graphs.service';
import { vaccEffObj } from 'src/app/data/app.data-visualization';
import { DataVisualObj } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-effect-of-vaccination-on-morbidity',
  templateUrl: './effect-of-vaccination-on-morbidity.component.html',
  styleUrls: ['./effect-of-vaccination-on-morbidity.component.css'],
})
export class EffectOfVaccinationOnMorbidityComponent {
  option: echarts.EChartsOption | any = getVaccGraph(25, false);
  timePeriodsInDays: number = 25;
  isDarkModeActive?: boolean;
  selectedOption: string='';
  @Input()visObjsArray:DataVisualObj[]=vaccEffObj;


  constructor(private generalSvc: GeneralService,private graphSvc:GraphsService) {}
  ngOnInit(): void {

    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.graphSvc.updateDataBasedOnDarkModeActive(this,newStatus,'getVaccGraph',2)
    });

    this.generalSvc.timePeriodsInDays.subscribe((newTimePeriods) => {
      this.graphSvc.updateDataBasedOnTimePeriods(this,"getVaccGraph",newTimePeriods,"thirdGraph",2)
    });

  }
}
