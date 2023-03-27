import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {data,options} from 'src/app/data/app.arrays';
import { getItems, getNgClassContainer } from 'src/app/data/app.functions';
import { CoronaService } from 'src/app/services/corona.service';
import { GraphsService } from 'src/app/services/graphs.service';
@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
///DataVisualGenericComponent
export class DataVisualGenericComponent implements OnInit {
  isEmptyCard?:boolean;
  isDarkModeActive=false;
  dropdownVisible: boolean = false;
  isActiveShareAndDownload:boolean=false;
  ngClassContainer?:{};
  ////change
  items = getItems(this.isDarkModeActive);
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
  isGraphCustom = this.graphName === 'main1';
  isTableCustom = this.graphName === 'lights';

  constructor(private coronaSvc: CoronaService,
    private graphSvc: GraphsService) {}

  ngOnInit(){
    this.ngClassContainer=getNgClassContainer(this.isDarkModeActive,this.isTable,this.graphName)

    this.coronaSvc.isDarkModeActive.subscribe((newStatus:boolean)=>{
      this.isDarkModeActive=newStatus;
      this.graphSvc.toggleDarkModeForItems(this)
      this.initializeGraph()
    })
     this.coronaSvc.timePeriodsInDays.subscribe(()=>{
      this.initializeGraph()
     })

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
