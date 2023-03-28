import { Component, Input } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';
import { DataVisualGenericComponent } from '../generic-table/generic-table.component';

@Component({
  selector: 'app-table-header-icons',
  templateUrl: './table-header-icons.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./table-header-icons.component.css'],
})
export class TableHeaderIconsComponent {
  @Input()obj?:DataVisualGenericComponent;

 options?: string[];
 isTable?: boolean=this.obj?.isTable;
 title?: string = '';
 selectedOption?: string = '';
 graphName: string = '';
 dropdownVisible?: boolean=false;
  isDarkModeActive?: boolean;
  constructor(private generalSvc: GeneralService) {}
  ngOnInit(): void {
   this.initializeVisualComponentProperties()

    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }
   initializeVisualComponentProperties(): void {
    const { options, isTable, title, selectedOption,graphName } = this.obj ?? {};
    this.graphName = graphName||"";
    this.options = options ?? [];
    this.isTable = isTable;
    this.title=title
    this.selectedOption=selectedOption
  }
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
