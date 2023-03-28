import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';
import {  pages } from 'src/app/data/app.arrays';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-anchor-list',
  templateUrl: './anchor-list.component.html',
  styleUrls: ['./anchor-list.component.css'],
})
export class AnchorListComponent implements OnInit {
  componentNameActive: string = '';
  pages = pages;
  lastComponentActiveId: string = '';
  ranges?: any[];
  constructor(
    private generalSvc: GeneralService,
    private scrollSvc: ScrollService
  ) {}

  ngOnInit(): void {
    this.generalSvc.componentNameActive.subscribe((newName) => {
      this.componentNameActive = newName;
    });
    this.generalSvc.ranges.subscribe((newData) => {
      this.ranges = newData;
      this.scrollToTitleOfComponentHandler();
    });
  }

  scrollToClickedComponent(anchor: string) {
    this.generalSvc.componentNameActive.next(anchor);
    this.scrollSvc.scrollToClickedComponent(this);
  }

  scrollToTitleOfComponentHandler() {
    this.scrollSvc.scrollToTitleOfComponentHandler(this);
    this.lastComponentActiveId = this.componentNameActive;
  }
}
