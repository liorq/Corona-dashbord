import { Component, Input, OnInit } from '@angular/core';
import { getClarificationDarkModeNgClass } from 'src/app/data/app.functions';
import { CoronaService } from 'src/app/services/corona.service';

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

  constructor(private coronaSvc: CoronaService) {}
  ngOnInit(): void {
    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
      this.ngClassObJ = getClarificationDarkModeNgClass(this.isDarkModeActive);
    });
  }
}
