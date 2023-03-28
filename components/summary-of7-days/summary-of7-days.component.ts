import { Component, OnInit } from '@angular/core';
import { SummaryOf7DaysObj } from 'src/app/data/app.arrays';
import { GeneralService } from 'src/app/services/general-info.service';

@Component({
  selector: 'app-summary-of7-days',
  templateUrl: './summary-of7-days.component.html',
  styleUrls: ['./summary-of7-days.component.css'],
})
export class SummaryOf7DaysComponent implements OnInit {
  constructor(private generalSvc: GeneralService) {}

  dataToDisplay: any[] = SummaryOf7DaysObj;
  isDarkModeActive?: boolean;

  ngOnInit() {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }

}
