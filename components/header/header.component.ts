import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isDarkModeActive?: boolean;
  isNavBarOpen?: boolean;
  isSwitchToEnglishBtnOpen?: boolean = false;

  constructor(public generalSvc: GeneralService) {}
  ngOnInit(): void {
    this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
      this.isDarkModeActive = newStatus;
    });
    this.generalSvc.isNavBarOpen.subscribe((newStatus) => {
      this.isNavBarOpen = newStatus;
    });
  }

  toggleMode() {
    this.generalSvc.isDarkModeActive.next(!this.isDarkModeActive);
  }
}
