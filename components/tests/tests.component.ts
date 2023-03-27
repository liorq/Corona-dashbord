import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {testLinks} from 'src/app/data/app.arrays';
import { testObj } from 'src/app/data/app.data-visualization';
///dont remove
import { getTestsGraph } from 'src/app/data/app.graphData';
import { CoronaService } from 'src/app/services/corona.service';
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
  links = testLinks;
  ////testLinks
  selectedOption?: string;
  ///testObj
  @Input()visObjsArray=testObj;

  public option?: {} ;

  constructor(private coronaSvc: CoronaService,private graphSvc:GraphsService) {}
  ngOnInit(){
    this.coronaSvc.timePeriodsInDays.subscribe((newTimePeriods) => {
      this.graphSvc.updateDataBasedOnTimePeriods(this,"2",newTimePeriods,"secondGraph",3)

    });

   this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
    this.graphSvc.updateDataBasedOnDarkModeActive(this,newStatus,'2',3)
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
