import {  Injectable } from '@angular/core';
import * as echarts from 'echarts';
import { graphPeriods, optionPeriods, periodOfTimeMap } from '../data/app.arrays';
///dont remove!
import { getDeathsGraph,getTestsGraph,getVaccGraph,getFurthersGraph } from '../data/app.graphData';
import { optionFunctions, selectedOptionObj } from '../data/app.objects';
import { MyComponentGraphsType } from './app.types';
import { DataVisualGenericComponent } from '../components/generic-table/generic-table.component';
import { TestsComponent } from '../components/tests/tests.component';
import { BehaviorSubject } from 'rxjs';
import { MyOptionsComponent } from '../components/my-options/my-options.component';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  selectedOption = new BehaviorSubject<{[key:string]:string}>(selectedOptionObj);


  updateDataBasedOnTimePeriods(componentObj: MyComponentGraphsType, Option: string,newTimePeriods:any,graphField:string,position:number) {
    const selectedOption = this.selectedOption.getValue();
    selectedOption[Option] = componentObj.selectedOption = periodOfTimeMap[newTimePeriods[graphField]];

    componentObj.timePeriodsInDays = newTimePeriods?.[graphField];
    componentObj.option = optionFunctions[Option](componentObj.timePeriodsInDays, componentObj.isDarkModeActive);
    componentObj.visObjsArray[position].optionObj= componentObj.option
    this.selectedOption.next(selectedOption);
}

  updateDataBasedOnDarkModeActive(componentObj: MyComponentGraphsType,newStatus:boolean,Option:string,position:number){
    componentObj.isDarkModeActive = newStatus;
    componentObj.option = optionFunctions[Option](componentObj.timePeriodsInDays, componentObj.isDarkModeActive);
    componentObj.visObjsArray[position].optionObj= componentObj.option
  }

  initializeGraph(componentObj:DataVisualGenericComponent){
     const isEmptyCard=componentObj.graphName==""||componentObj.isTable;

    if(isEmptyCard)
     return

    setTimeout(() => {
    const chartDom = document.getElementById(componentObj.graphName)!;
    const myChart = echarts?.init(chartDom);
    const option:any=componentObj.optionObj
    componentObj.chart?.setOption(option);
    option && myChart?.setOption(option);
    componentObj.chart = myChart;
    this.ResizeGraphSize(componentObj);
    }, 100);

  }

  ResizeGraphSize(componentObj:DataVisualGenericComponent){
     window.addEventListener('resize', () => {
      if (componentObj.resizeTimeoutId)
        clearTimeout(componentObj.resizeTimeoutId);

        componentObj.resizeTimeoutId = setTimeout(() => {
          componentObj.chart?.resize();
      }, 300);
    });
  }

  toggleDarkModeForItems(componentObj:DataVisualGenericComponent){
    componentObj.items.forEach(item => {
      item.isDarkMode = !item.isDarkMode;
    });
  }
  initGraphTests(componentObj:TestsComponent){
    let chartDom = document.getElementById('main1') as HTMLElement;
    if(!chartDom)
     return
    let myChart = echarts.init(chartDom);
    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];

    for (let i = 0; i < 10; i++) {
      xAxisData.push('Class' + i);
      data1.push(+(Math.random() * 2).toFixed(2));
      data2.push(+(Math.random() * 5).toFixed(2));
      data3.push(+(Math.random() + 0.3).toFixed(2));
      data4.push(+Math.random().toFixed(2));
    }

    myChart.on('brushSelected', function (params: any) {
      let brushed = [];
      let brushComponent = params.batch[0];
      for (let sIdx = 0; sIdx < brushComponent?.selected?.length; sIdx++) {
        let rawIndices = brushComponent?.selected[sIdx]?.dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
      }
      myChart.setOption({
        title: '',
      });
    });

    componentObj.visObjsArray[1].optionObj && myChart.setOption( componentObj.visObjsArray[1].optionObj);
    componentObj.chart = myChart;
  }
  updateSelectedTimePeriodHandler(componentObj:MyOptionsComponent) {
    if (this.isSelectableConfirm(componentObj))
      this.updateSelectedTimePeriod(componentObj)
  }
  updateSelectedTimePeriod(componentObj:MyOptionsComponent){
    componentObj.periodOfTime = optionPeriods[componentObj.selectedOptions.firstChoice];
      componentObj.timePeriods[graphPeriods[componentObj.graphName||""]] = componentObj.periodOfTime;
      componentObj.coronaSvc.timePeriodsInDays.next(componentObj.timePeriods);
  }
  isSelectableConfirm(componentObj:MyOptionsComponent){
    return componentObj.graphName && componentObj.selectedOptions.firstChoice;
  }
}
