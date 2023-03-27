import { Component, Input } from '@angular/core';
import { getVaccGraph } from 'src/app/data/app.graphData';
import { CoronaService } from 'src/app/services/corona.service';
import { GraphsService } from 'src/app/services/graphs.service';
import { vaccEffObj } from 'src/app/data/app.data-visualization';

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
  @Input()visObjsArray=vaccEffObj;


  constructor(private coronaSvc: CoronaService,private graphSvc:GraphsService) {}
  ngOnInit(): void {

    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.graphSvc.updateDataBasedOnDarkModeActive(this,newStatus,'3',2)
    });

    this.coronaSvc.timePeriodsInDays.subscribe((newTimePeriods) => {
      this.graphSvc.updateDataBasedOnTimePeriods(this,"3",newTimePeriods,"thirdGraph",2)
    });

  }
}
