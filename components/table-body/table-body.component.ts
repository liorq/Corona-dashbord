import { Component, Input, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
import { clickCounterObj } from 'src/app/data/app.arrays';
import { graphNameObj } from 'src/app/data/app.objects';
import { getNgClassColor } from 'src/app/data/app.functions';
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
  ////קשור למחלקה
  clickCounterObj = clickCounterObj;
  isSmallColumns?: {};
  constructor(private coronaSvc: CoronaService) {}
  ngOnInit(): void {
    const { graphName, tablesData, isDarkModeActive, isTable } = this.obj ?? {};
    this.graphName = graphName;
    this.tablesData = tablesData ?? [];
    this.isDarkModeActive = isDarkModeActive;
    this.isTable = isTable;




    this.coronaSvc.filteredData.subscribe((newData) => {
      if (this.graphName && newData != undefined) {
        this.tablesData = newData[graphNameObj[this.graphName]];
      }
    });

    this.isSmallColumns = this.graphName === 'lights';
  }
  getNgClassColor(row: {}, position: number) {
    return getNgClassColor(row, position, this.graphName || '');
  }
  getNgClassHeight() {
    return { tableHeight2: !this.isSmallColumns };
  }
}
