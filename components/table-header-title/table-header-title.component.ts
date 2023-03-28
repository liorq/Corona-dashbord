import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';
import { clickCounterObj } from 'src/app/data/app.arrays';
import { getNgClassTableHdrCmp } from 'src/app/data/app.functions';

@Component({
  selector: 'app-table-header-title',
  templateUrl: './table-header-title.component.html',
  styleUrls: [
    '../generic-table/generic-table.component.css',
    './table-header-title.component.css',
  ],
})
export class TableHeaderTitleComponent implements OnInit {
  @Input() ContainerClass: string = 'align-div cell title lavender-background';
  @Input() rectangleNgClass: {} = {};
  @Input() ContainerNgClass: {} = getNgClassTableHdrCmp(this.isDarkModeActive);
  @Input() text?: string = '';
  @Input() textClass: string = 'fontWeight400';
  @Input() tableTitleId?: string;
  isDarkModeActive?: boolean;
  clickCounterObj = clickCounterObj;
  constructor(public generalSvc: GeneralService) {}

  ngOnInit(): void {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }
}
