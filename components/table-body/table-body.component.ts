import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';
import { clickCounterObj } from 'src/app/data/app.arrays';
import { graphNameObj } from 'src/app/data/app.objects';
import { getTableBodyClassNg } from 'src/app/data/app.functions';
import { DataVisualGenericComponent } from '../generic-table/generic-table.component';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./table-body.component.css'],
})
export class TableBodyComponent implements OnInit {

  @Input()obj?:DataVisualGenericComponent;
  graphName?: string;
  tablesData?: any[] = [];
  isDarkModeActive?: boolean;
  isTable?: boolean;
  clickCounterObj = clickCounterObj;
  isSmallColumns?: {};
  constructor(private generalSvc: GeneralService) {}
  ngOnInit(): void {
   this.initializeVisualComponentProperties()

    this.generalSvc.filteredData.subscribe((newData) => {
      if (this.graphName && newData != undefined) {
        this.tablesData = newData[graphNameObj[this.graphName]];
      }
    });

    this.isSmallColumns = this.graphName === 'lights';
  }

  initializeVisualComponentProperties(): void {
    const { graphName, tablesData, isDarkModeActive, isTable } = this.obj ?? {};
    this.graphName = graphName;
    this.tablesData = tablesData ?? [];
    this.isDarkModeActive = isDarkModeActive;
    this.isTable = isTable;

  }
  getTableBodyClassNg(row: {}, position: number) {
    return getTableBodyClassNg(row, position, this.graphName || '');
  }
  getNgClassHeight() {
    return { tableHeight2: !this.isSmallColumns };
  }
}
