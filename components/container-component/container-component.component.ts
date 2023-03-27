import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.css',]
})
export class ComponentContainer implements OnInit{
  TopTitle:string='';
@Input()visObjsArray:any[]=[];
@Input()linksListData:any[]=[]
ClassTitleContainer:string=''
ngOnInit(): void {
  this.TopTitle=this.visObjsArray[0]?.TopTitle;
  this.ClassTitleContainer=this.visObjsArray[0]?.ClassTitleContainer;
}
}
