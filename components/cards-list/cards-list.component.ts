import { Component, Input, OnInit } from '@angular/core';
import { openWindowIconI } from 'src/app/data/app.arrays';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() dataToDisplay?: any[] = [];
  isDarkModeActive?: boolean;
  constructor(private coronaSvc: CoronaService) {}
  public openWindowsIIcon = openWindowIconI;

  ngOnInit(): void {
    this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
  }
}
