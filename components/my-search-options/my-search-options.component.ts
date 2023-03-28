import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';
import { graphDropdownMap, tableTypes } from 'src/app/data/app.objects';
import { getSearchOptionsInputClass, getNgClassForBtns } from 'src/app/data/app.functions';
import { DataVisualGenericComponent } from '../generic-table/generic-table.component';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-my-search-options',
  templateUrl: './my-search-options.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./my-search-options.component.css'],
})
export class MySearchOptionsComponent implements OnInit {
  @Input()obj?:DataVisualGenericComponent;
 graphName?: string;
  @Input() ngClassForBtns?: {};
  @Input() dropdownVisible?: boolean;
  @Input() searchText: string = '';
  @Input() tablesData: any[] = [];
  @Input() filteredData: any[] = [];
  @Input() selectedOption: string = '';
  @Input() showResults?: boolean=false;
  isDarkModeActive: boolean = false;
  InputClass?: {};
  constructor(public generalSvc: GeneralService,public TableSvc: TablesService) {}

  ngOnInit(): void {
    const {graphName}=this.obj??{}
    this.graphName=graphName;
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });

    this.generalSvc.isDropDownVisible.subscribe((newStatus) => {
      if (this.graphName)
        this.dropdownVisible = newStatus[graphDropdownMap[this.graphName]];

    });

    this.generalSvc.filteredData.subscribe((newData) => {
      this.filteredData =newData[tableTypes[this.graphName||""] ];
    });

    this.InputClass = getSearchOptionsInputClass(this.graphName);
    this.ngClassForBtns = getNgClassForBtns(this.isDarkModeActive);
  }

  SearchHandler() {
    this.TableSvc.SearchHandler(this)
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  confirmSelectHandler(option: string) {
  this.TableSvc.confirmSelectHandler(this,option)
  }

  resetTableData() {
    this.TableSvc.resetTableData(this)
  }

  handleResultSelection(result: any, event: Event) {
   this.TableSvc.handleResultSelection(this,result,event);
  }

}
