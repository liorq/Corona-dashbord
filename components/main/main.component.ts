import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
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



constructor(public coronaSvc: CoronaService,private scrollSvc:ScrollService) {}
ngOnInit(): void {
  this.coronaSvc.isDarkModeActive.subscribe((newStatus) => {
    this.isDarkModeActive = newStatus;
  });

  this.coronaSvc.isNavBarOpen.subscribe((newStatus) => {
    this.isNavBarOpen = newStatus;
  });

}


ngAfterViewInit() {
  this.coronaSvc.isDarkModeActive.subscribe(isDarkModeActive => this.isDarkModeActive = isDarkModeActive);
  this.coronaSvc.isNavBarOpen.subscribe(isNavBarOpen => this.isNavBarOpen = isNavBarOpen);
   this.scrollSvc.onWindowScroll(this);

  const scrollingElement = document.getElementById('scrolling-element-inside');
  scrollingElement?.addEventListener('scroll', () => this.scrollSvc.onWindowScroll(this));
}


}
