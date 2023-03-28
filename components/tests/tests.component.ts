import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {testLinks} from 'src/app/data/app.arrays';
import { testObj } from 'src/app/data/app.data-visualization';
///dont remove
import { getTestsGraph } from 'src/app/data/app.graphData';
import { DataVisualObj, Link } from 'src/app/data/app.interfaces';
import { GeneralService } from 'src/app/services/general-info.service';
import { GraphsService } from 'src/app/services/graphs.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
})
export class TestsComponent implements AfterViewInit,OnInit {
  timePeriodsInDays: number = 25;
  isDarkModeActive?: boolean;
  chart: echarts.ECharts | null = null;
  links:Link[] = testLinks;
  selectedOption?: string;
  @Input()visObjsArray:DataVisualObj[]=testObj;

  public option?: {} ;

  constructor(private generalSvc: GeneralService,private graphSvc:GraphsService) {}
  ngOnInit(){
    this.generalSvc.timePeriodsInDays.subscribe((newTimePeriods) => {
      this.graphSvc.updateDataBasedOnTimePeriods(this,"getTestsGraph",newTimePeriods,"secondGraph",3)

    });

   this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
    this.graphSvc.updateDataBasedOnDarkModeActive(this,newStatus,'getTestsGraph',3)
    this.initGraph()
    });
  }
  ngAfterViewInit(): void {
    this.initGraph()
  }

  initGraph(){
    this.graphSvc.initGraphTests(this)
  }
}
