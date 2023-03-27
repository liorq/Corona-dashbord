import { Component, Input, OnInit } from '@angular/core';
import { getBtnNgClass, getRecNgClass } from 'src/app/data/app.functions';
import { graphDropdownMap, graphNumber } from 'src/app/data/app.objects';
import { CoronaService } from 'src/app/services/corona.service';
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
  @Input()theObj?:DataVisualGenericComponent;

  constructor(    private coronaSvc: CoronaService,
    private graphSvc: GraphsService,) {}
  ngOnInit(): void {


 this.graphSvc.selectedOption.subscribe((newStatus)=>{
  this.selectedOption= newStatus[graphNumber[this.graphName||""]]

 })
    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;

      this.btnNgClass = getBtnNgClass(this.isDarkModeActive);
      this.RecNgClass = getRecNgClass(
        this.isDarkModeActive,
        this.dropdownVisible
      );
    });

    this.coronaSvc.isDropDownVisible.subscribe((newStatus) => {
      if (this.graphName)
        this.dropdownVisible = newStatus[graphDropdownMap[this.graphName]];
    });
  }
  changeRecClassValue() {
    this.dropdownVisible = !this.dropdownVisible;
    this.RecNgClass = getRecNgClass(
      this.isDarkModeActive,
      this.dropdownVisible
    );
  }
}
