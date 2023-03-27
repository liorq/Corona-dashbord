import { Component, Input } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
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
  constructor(private coronaSvc: CoronaService) {}
  ngOnInit(): void {
    const { options, isTable, title, selectedOption,graphName } = this.obj ?? {};
    this.graphName = graphName||"";
    this.options = options ?? [];
    this.isTable = isTable;
    this.title=title
    this.selectedOption=selectedOption


    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
