import { Injectable } from '@angular/core';
import { MySearchOptionsComponent } from '../components/my-search-options/my-search-options.component';
import { lightsTable, VaccTable } from '../data/app.arrays';
import { graphNameObj } from '../data/app.objects';
import { TableHeaderComponent } from '../components/table-header/table-header.component';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor() { }
  SearchHandler(componentObj:MySearchOptionsComponent) {
    this.resetTableData(componentObj);
    componentObj.tablesData = componentObj.graphName == 'lights' ? lightsTable : VaccTable;
    const newArray =  this.getFilteredCites(componentObj);

    if (componentObj.searchText.length > 0&&newArray?.length > 0)
    componentObj.filteredData = newArray;

    componentObj.showResults = (newArray?.length > 0);
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  confirmSelectHandler(componentObj:MySearchOptionsComponent,option: string) {
    if (option == 'ok' && componentObj.searchText.length > 0) {
      const filteredData = componentObj.coronaSvc.filteredData.getValue();
      if (componentObj.graphName) {
        filteredData[graphNameObj[componentObj.graphName]] = componentObj.filteredData;
        componentObj.coronaSvc.filteredData.next(filteredData);
      }
    } else
     this.resetTableData(componentObj);
  }

  resetTableData(componentObj:MySearchOptionsComponent) {
    if (componentObj.searchText == '') {
      componentObj.coronaSvc.filteredData.next({
        firstTable: lightsTable,
        secondTable: VaccTable,
      });
    }
  }

  handleResultSelection(componentObj:MySearchOptionsComponent,result: any, event: Event) {
    event.stopPropagation();
    componentObj.searchText = result?.address;
    componentObj.selectedOption = result?.address;
    componentObj.showResults = false;
    componentObj.filteredData = this.getFilteredCites(componentObj);
  }

  getFilteredCites(componentObj:MySearchOptionsComponent) {
    return componentObj.tablesData?.filter((c) => c?.address.includes(componentObj.searchText));
  }



  sortTableByColumnHandler(componentObj:TableHeaderComponent,column: string) {
    if (componentObj.clickCounterObj[column] === 2) {
      componentObj.clickCounterObj[column] = 0;
      return;
    } else {
      componentObj.clickCounterObj[column] += 1;
    }

    if (column === componentObj.currentSort.column) {
      componentObj.currentSort.direction =
      componentObj.clickCounterObj[column] === 2 ? 'desc' : 'asc';
    } else {
      componentObj.currentSort.column = column;
      componentObj.currentSort.direction = 'asc';
    }

    this.resetOtherClicks(componentObj,column);
    componentObj.tablesData.sort((a: any, b: any) => {
      let comparison = 0;
      if (a[column] > b[column])
        comparison = 1;
       else if (a[column] < b[column])
        comparison = -1;

      return componentObj.currentSort.direction === 'asc' ? comparison : -comparison;
    });
  }
  resetOtherClicks(componentObj:TableHeaderComponent,column: string) {
    Object.keys(componentObj.clickCounterObj).forEach((key: string) => {
      if (key !== column) componentObj.clickCounterObj[key] = 0;
    });
  }



}
