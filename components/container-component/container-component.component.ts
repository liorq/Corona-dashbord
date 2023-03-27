import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.css',]
})
export class ComponentContainer implements OnInit{
  TopTitle:string='';
@Input()arrayOfVisualizationObjects:any[]=[];
@Input()linksListData:any[]=[]
ClassTitleContainer:string=''
ngOnInit(): void {
  this.TopTitle=this.arrayOfVisualizationObjects[0]?.TopTitle;
  this.ClassTitleContainer=this.arrayOfVisualizationObjects[0]?.ClassTitleContainer;
}
}
