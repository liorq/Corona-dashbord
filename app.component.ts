import {  Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isNavBarOpen?:boolean;
  constructor(private generalSvc:GeneralService){}
ngOnInit(): void {
  this.generalSvc.isNavBarOpen.subscribe((newStatus)=>{
    this.isNavBarOpen=newStatus
  })
}
}
