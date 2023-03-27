import {  Component, OnInit } from '@angular/core';
import { CoronaService } from './services/corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isNavBarOpen?:boolean;
  constructor(private coronaSvc:CoronaService){}
ngOnInit(): void {
  this.coronaSvc.isNavBarOpen.subscribe((newStatus)=>{
    this.isNavBarOpen=newStatus
  })
}
}
