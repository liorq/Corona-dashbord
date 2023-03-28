import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {data,options} from 'src/app/data/app.arrays';
import { getGraphLegendList, getNgClassForDataVis } from 'src/app/data/app.functions';
import { DataVisualObj } from 'src/app/data/app.interfaces';
import { GeneralService } from 'src/app/services/general-info.service';
import { GraphsService } from 'src/app/services/graphs.service';
@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class DataVisualGenericComponent implements OnInit,DataVisualObj {
  isEmptyCard?:boolean;
  isDarkModeActive=false;
  dropdownVisible: boolean = false;
  isActiveShareAndDownload:boolean=false;
  ngClassContainer?:{};
  legendList = getGraphLegendList(this.isDarkModeActive);
  @Input() isTable?:boolean;
  @Input()title?:string;
  @Input() chart: echarts.ECharts | null = null;
  @Input() resizeTimeoutId?: any;
  @Input() optionObj?:{};
  @Input() periodOfTime:number=25;
  @Input() tablesData?:any=[];
  @Input() graphSize:string="";
  @Input() textDownGraph?:string;
  @Input()textAboveGraph?:string;
  @Input()ClassTextAboveGraph?:string;
  @Input() graphName:string="";
  @Input()selectBoxId?:string;
  @Input()selectedOption?: string;
  @Input()tableHeaderId?:string="";
  @Input() classContainer?:string="";
  @Input() options=options;
  @Input()classTable='table';
  isGraphCustom ?:boolean;
  isTableCustom ?:boolean;

  constructor(private generalSvc: GeneralService,
    private graphSvc: GraphsService) {}

  ngOnInit(){

    this.generalSvc.isDarkModeActive.subscribe((newStatus:boolean)=>{
      this.isDarkModeActive=newStatus;
      this.graphSvc.toggleDarkModeForItems(this)
      this.initializeGraph()
    })
     this.generalSvc.timePeriodsInDays.subscribe(()=>{
      this.initializeGraph()
     })

  }
  ngOnChanges() {
    this.isGraphCustom = this.graphName === 'main1';
    this.isTableCustom = this.graphName === 'lights';
    this.ngClassContainer=getNgClassForDataVis(this.isDarkModeActive,this.isTable,this.graphName)
  }
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  toggleShareAndDownload(){
    this.isActiveShareAndDownload = !this.isActiveShareAndDownload
  }

  ngAfterViewInit(): void {
    this.initializeGraph();
  }
  initializeGraph(){
  this.graphSvc.initializeGraph(this)
  }
}
