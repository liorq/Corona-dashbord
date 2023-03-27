import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
import { idAnchors, pages } from 'src/app/data/app.arrays';
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
    private coronaSvc: CoronaService,
    private scrollSvc: ScrollService
  ) {}

  ngOnInit(): void {
    this.coronaSvc.componentNameActive.subscribe((newName) => {
      this.componentNameActive = newName;
    });
    this.coronaSvc.ranges.subscribe((newData) => {
      this.ranges = newData;
      this.scrollToTitleOfComponentHandler();
    });
  }

  scrollToClickedComponent(anchor: string) {
    this.coronaSvc.componentNameActive.next(anchor);
    this.scrollSvc.scrollToClickedComponent(this);
  }

  scrollToTitleOfComponentHandler() {
    this.scrollSvc.scrollToTitleOfComponentHandler(this);
    this.lastComponentActiveId = this.componentNameActive;
  }
}
