import { Component, Input, OnInit } from '@angular/core';
import { getSelectBoxBtnsClass, getSelectBoxRecClass } from 'src/app/data/app.functions';
import { graphDropdownMap, graphNumber } from 'src/app/data/app.objects';
import { GeneralService } from 'src/app/services/general-info.service';
import { DataVisualGenericComponent } from '../generic-table/generic-table.component';
import { GraphsService } from 'src/app/services/graphs.service';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./select-box.component.css' ],
})
export class SelectBoxComponent implements OnInit {
  @Input() btnClass: string = 'selected-option';
  isDarkModeActive?: boolean;
  @Input() graphName?: string;
  @Input() dropdownVisible?: boolean;
  @Input() btnNgClass?: {};
  @Input() selectedOption?: string;
  @Input() RecClass: string = 'center-half-rectangle';
  @Input() RecNgClass?: {};
  @Input() selectBoxId?: string;
  @Input()obj?:DataVisualGenericComponent;

  constructor(    private generalSvc: GeneralService,
    private graphSvc: GraphsService,) {}
  ngOnInit(): void {


 this.graphSvc.selectedOption.subscribe((newStatus)=>{
  this.selectedOption= newStatus[graphNumber[this.graphName||""]]

 })
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;

      this.btnNgClass = getSelectBoxBtnsClass(this.isDarkModeActive);
      this.RecNgClass = getSelectBoxRecClass(
        this.isDarkModeActive,
        this.dropdownVisible
      );
    });

    this.generalSvc.isDropDownVisible.subscribe((newStatus) => {
      if (this.graphName)
        this.dropdownVisible = newStatus[graphDropdownMap[this.graphName]];
    });
  }
  changeRecClassValue() {
    this.dropdownVisible = !this.dropdownVisible;
    this.RecNgClass = getSelectBoxRecClass(
      this.isDarkModeActive,
      this.dropdownVisible
    );
  }
}
