import { Component, Input } from '@angular/core';
import { threeOption } from 'src/app/data/app.graphData';
import { CoronaService } from 'src/app/services/corona.service';
import { options3, periodOfTimeMap, titles4 } from 'src/app/data/app.arrays';
import { GraphsService } from 'src/app/services/graphs.service';
import { arrayOfVisualizationObjects6 } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-effect-of-vaccination-on-morbidity',
  templateUrl: './effect-of-vaccination-on-morbidity.component.html',
  styleUrls: ['./effect-of-vaccination-on-morbidity.component.css'],
})
export class EffectOfVaccinationOnMorbidityComponent {
  option: echarts.EChartsOption | any = threeOption(25, false);
  timePeriodsInDays: number = 25;
  titles = titles4;
  isDarkModeActive?: boolean;
  options = options3;
  selectedOption: string='';
  @Input()arrayOfVisualizationObjects=arrayOfVisualizationObjects6;


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
