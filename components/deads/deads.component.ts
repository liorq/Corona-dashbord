import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { GeneralService } from 'src/app/services/general-info.service';
import { GraphsService } from 'src/app/services/graphs.service';
import { deadsObj } from 'src/app/data/app.data-visualization';
import { DataVisualObj } from 'src/app/data/app.interfaces';

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
  @Input()visObjsArray:DataVisualObj[]=deadsObj;

  constructor(private generalSvc: GeneralService,private graphSvc:GraphsService) {}

  ngOnInit(): void {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.graphSvc.updateDataBasedOnDarkModeActive(this,newStatus,'getDeathsGraph',0)
    });

    this.generalSvc.timePeriodsInDays.subscribe((newTimePeriods) => {
      this.graphSvc.updateDataBasedOnTimePeriods(this,"getDeathsGraph",newTimePeriods,"firstGraph",0)
    });
  }




}
