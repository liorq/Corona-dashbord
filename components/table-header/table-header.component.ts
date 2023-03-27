import { Component, Input, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
import { clickCounterObj } from 'src/app/data/app.arrays';
import { getCurrentSortObj, getTableData } from 'src/app/data/app.functions';
import { DataVisualGenericComponent } from '../generic-table/generic-table.component';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['../generic-table/generic-table.component.css',
    './table-header.component.css',

  ],
})
export class TableHeaderComponent implements OnInit {
  @Input()theObj?:DataVisualGenericComponent;
  isTable?:boolean=this.theObj?.isTable;
  graphName?: string;
  tablesData?: any = [];
  isDarkModeActive?: boolean;
  tableHeaderId?: string;
  clickCounterObj = clickCounterObj;
  currentSort = getCurrentSortObj();
  headers: any[] = [];

  constructor(private coronaSvc: CoronaService,private tablesSvc: TablesService) {}
  ngOnInit(): void {
    const { graphName, tablesData, isDarkModeActive, tableHeaderId,isTable } = this.theObj ?? {};
    this.graphName = graphName;
    this.tablesData = tablesData ?? [];
    this.isDarkModeActive = isDarkModeActive;
    this.tableHeaderId=tableHeaderId
    this.isTable=isTable;

    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
      this.headers = getTableData(this.isDarkModeActive,this.graphName);
    });
  }

  sortTableByColumnHandler(column: string) {
    this.tablesSvc.sortTableByColumnHandler(this,column)
  }

}
