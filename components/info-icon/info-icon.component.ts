import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general-info.service';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: [
    '../generic-table/generic-table.component.css',
    './info-icon.component.css',
  ],
})
export class InfoIconComponent implements OnInit{
 isDarkModeActive?: boolean;
 constructor(private generalSvc:GeneralService){}

 ngOnInit(){
this.generalSvc.isDarkModeActive.subscribe((newStatus)=>{
  this.isDarkModeActive=newStatus;
})
}

}
