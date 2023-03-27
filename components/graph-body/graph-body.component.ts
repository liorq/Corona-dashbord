import { Component, Input, OnInit } from '@angular/core';
import { DataVisualGenericComponent } from '../generic-table/generic-table.component';
import { CoronaService } from 'src/app/services/corona.service';
import { GraphsService } from 'src/app/services/graphs.service';

@Component({
  selector: 'app-graph-body',
  templateUrl: './graph-body.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./graph-body.component.css']
})
export class GraphBodyComponent implements OnInit{
  isTable: boolean=false;
  graphSize: string='';
  graphName: string='';
  @Input()obj?:DataVisualGenericComponent;
  isEmptyCard: boolean | undefined;
  isDarkModeActive: boolean | undefined;
  optionObj:any;
  chart:any
  resizeTimeoutId:any
  constructor(private coronaSvc :CoronaService,private graphSvc:GraphsService){}
ngOnInit(): void {

  const {isTable,graphName,graphSize,optionObj,chart,resizeTimeoutId}=this.obj??{};
  this.isTable=isTable||false;
  this.graphName=graphName||"";
  this.graphSize=graphSize||""
  this.optionObj=optionObj;
  this.chart=chart
  this.resizeTimeoutId=resizeTimeoutId
  this.isEmptyCard=this.graphName==""||this.isTable;

  this.coronaSvc.isDarkModeActive.subscribe((newStatus:boolean)=>{
    this.isDarkModeActive=newStatus;
    this.initializeGraph()
  })
   this.coronaSvc.timePeriodsInDays.subscribe(()=>{
    this.initializeGraph()

   })

}
initializeGraph(){
  }
}
