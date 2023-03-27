import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { CoronaService } from 'src/app/services/corona.service';
import { GraphsService } from 'src/app/services/graphs.service';
import { deadsObj } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-deads',
  templateUrl: './deads.component.html',
  styleUrls: ['./deads.component.css'],
})
export class DeadsComponent implements OnInit {
  timePeriodsInDays: number = 25;
  option?: echarts.EChartsOption | any;
  isDarkModeActive?: boolean;
  selectedOption: string='';
  isDropDownVisible?: boolean;
  @Input()arrayOfVisualizationObjects=deadsObj;

  constructor(private coronaSvc: CoronaService,private graphSvc:GraphsService) {}

  ngOnInit(): void {
    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.graphSvc.updateDataBasedOnDarkModeActive(this,newStatus,'1',0)
    });

    this.coronaSvc.timePeriodsInDays.subscribe((newTimePeriods) => {
      this.graphSvc.updateDataBasedOnTimePeriods(this,"1",newTimePeriods,"firstGraph",0)
    });
  }




}
