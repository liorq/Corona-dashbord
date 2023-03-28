import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';
import { graphPeriods, optionPeriods } from 'src/app/data/app.arrays';
import { getNgClassForBtns } from 'src/app/data/app.functions';
import { graphDropdownMap } from 'src/app/data/app.objects';
import { GraphsService } from 'src/app/services/graphs.service';

@Component({
  selector: 'app-my-options',
  templateUrl: './my-options.component.html',
  styleUrls: [
    '../generic-table/generic-table.component.css',
    './my-options.component.css',
  ],
})
export class MyOptionsComponent implements OnInit {
  ////radios btns
  @Input() options?: any[];
  @Input() ngClassForBtns?: {};
  @Input() dropdownVisible?: boolean;
  @Input() graphName?: string;
  timePeriods = this.generalSvc.timePeriodsInDays.getValue();
  selectedOption?: string;
  periodOfTime?: number;
  isDarkModeActive?: boolean;
  isDropDownVisible?: {};
  selectedOptions: any = [];

  constructor(public generalSvc: GeneralService,public graphSvc: GraphsService) {}
  ngOnInit(): void {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
      this.ngClassForBtns = getNgClassForBtns(this.isDarkModeActive);
    });
  }


  updateSelectedTimePeriodHandler() {
    if (this.isSelectableConfirm())
      this.graphSvc.updateSelectedTimePeriodHandler(this)

     this.updateGraphRelatedSubjects();
  }

  isSelectableConfirm(){
    return this.graphName && this.selectedOptions.firstChoice;
  }

  updateGraphRelatedSubjects() {
    if (this.graphName) {
      this.generalSvc.timePeriodsInDays.next(this.timePeriods);
      const subjectValues = this.generalSvc.isDropDownVisible.getValue();
      subjectValues[graphDropdownMap[this.graphName]] = false;
      this.generalSvc.isDropDownVisible.next(subjectValues);
    }
  }
}
