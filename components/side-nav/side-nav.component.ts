import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../../services/corona.service';
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
  constructor(private coronaSvc: CoronaService) {}

  ngOnInit(): void {
    this.coronaSvc.isNavBarOpen.subscribe((newStatus) => {
      this.isNavBarOpen = newStatus;
    });
  }

  toggleNav() {
    this.coronaSvc.isNavBarOpen.next(!this.isNavBarOpen);
    document.getElementById('sidenav')?.classList.toggle('show');
  }

  openOptions(index: number) {
    this.showDropdown[index] = !this.showDropdown[index];
  }
}
