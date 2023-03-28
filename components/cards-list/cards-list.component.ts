import { Component, Input, OnInit } from '@angular/core';
import { openWindowIconI } from 'src/app/data/app.arrays';
import { GeneralService } from 'src/app/services/general-info.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() dataToDisplay?: any[] = [];
  isDarkModeActive?: boolean;
  constructor(private generalSvc: GeneralService) {}
  public openWindowsIIcon = openWindowIconI;

  ngOnInit(): void {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }
}
