import { Component, Input, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';

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
  constructor(private coronaSvc: CoronaService) {}
  
  ngOnInit(): void {
    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }
}
