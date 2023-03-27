import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';

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
 constructor(private coronaSvc:CoronaService){}

 ngOnInit(){
this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
  this.isDarkModeActive=newStatus;
})
}

}
