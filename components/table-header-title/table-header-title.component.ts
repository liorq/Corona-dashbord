import { Component, Input, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
import { clickCounterObj } from 'src/app/data/app.arrays';
import { getContainerNgClass } from 'src/app/data/app.functions';

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
  @Input() ContainerNgClass: {} = getContainerNgClass(this.isDarkModeActive);
  @Input() text?: string = '';
  @Input() textClass: string = 'fontWeight400';
  @Input() tableTitleId?: string;
  isDarkModeActive?: boolean;
  clickCounterObj = clickCounterObj;
  constructor(public coronaSvc: CoronaService) {}

  ngOnInit(): void {
    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }
}
