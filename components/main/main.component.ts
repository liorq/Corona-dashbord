import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';
import { componentsId } from 'src/app/data/app.arrays';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  currentPosition?: number;
  isDarkModeActive?:boolean;
  componentsId = componentsId;
  isNavBarOpen?: boolean;



constructor(public generalSvc: GeneralService,private scrollSvc:ScrollService) {}
ngOnInit(): void {
  this.generalSvc.isDarkModeActive.subscribe((newStatus) => {
    this.isDarkModeActive = newStatus;
  });

  this.generalSvc.isNavBarOpen.subscribe((newStatus) => {
    this.isNavBarOpen = newStatus;
  });

}


ngAfterViewInit() {
  this.generalSvc.isDarkModeActive.subscribe(isDarkModeActive => this.isDarkModeActive = isDarkModeActive);
  this.generalSvc.isNavBarOpen.subscribe(isNavBarOpen => this.isNavBarOpen = isNavBarOpen);
   this.scrollSvc.handleWindowScroll(this);

  const scrollingElement = document.getElementById('scrolling-element-inside');
  scrollingElement?.addEventListener('scroll', () => this.scrollSvc.handleWindowScroll(this));
}


}
