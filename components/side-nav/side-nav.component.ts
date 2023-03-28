import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-info.service';
import { sideNavData } from 'src/app/data/app.arrays';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  showDropdown: boolean[] = [false, false, false];
  isNavBarOpen?: boolean;
  sideNavData = sideNavData;
  constructor(private generalSvc: GeneralService) {}

  ngOnInit(): void {
    this.generalSvc.isNavBarOpen.subscribe((newStatus) => {
      this.isNavBarOpen = newStatus;
    });
  }

  toggleNav() {
    this.generalSvc.isNavBarOpen.next(!this.isNavBarOpen);
    document.getElementById('sidenav')?.classList.toggle('show');
  }

  openOptions(index: number) {
    this.showDropdown[index] = !this.showDropdown[index];
  }
}
