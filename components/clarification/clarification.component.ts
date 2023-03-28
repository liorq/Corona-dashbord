import { Component, Input, OnInit } from '@angular/core';
import { getClarificationDarkModeNgClass } from 'src/app/data/app.functions';
import { GeneralService } from 'src/app/services/general-info.service';

@Component({
  selector: 'app-clarification',
  templateUrl: './clarification.component.html',
  styleUrls: [
    '../generic-table/generic-table.component.css',
    './clarification.component.css',
  ],
})
export class ClarificationComponent implements OnInit {
  @Input() className: string = '';
  @Input() ngClassObJ?: {};
  @Input() isTable?: boolean;
  isDarkModeActive?: boolean;

  constructor(private generalSvc: GeneralService) {}
  ngOnInit(): void {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
      this.ngClassObJ = getClarificationDarkModeNgClass(this.isDarkModeActive);
    });
  }
}
