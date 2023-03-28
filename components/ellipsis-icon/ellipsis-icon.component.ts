import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';

@Component({
  selector: 'app-ellipsis-icon',
  templateUrl: './ellipsis-icon.component.html',
  styleUrls: [
    '../generic-table/generic-table.component.css',
    './ellipsis-icon.component.css',
  ],
})
export class EllipsisIconComponent implements OnInit {
  @Input() isActiveShareAndDownload?: boolean;
  isDarkModeActive?: boolean;
  constructor(private generalSvc: GeneralService) {}

  ngOnInit(): void {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }
}
