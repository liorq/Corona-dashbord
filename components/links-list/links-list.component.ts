import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css'],
})
export class LinksListComponent implements OnInit {
  @Input() title?: string;
  @Input() link?: string;
  @Input() description?: string;
  @Input() pictureClass?: string;
  isDarkModeActive?: boolean;
  constructor(private generalSvc: GeneralService) {}
  ngOnInit() {
    this.generalSvc.isDarkModeActive.subscribe((newStatus: boolean) => {
      this.isDarkModeActive = newStatus;
    });
  }
}
