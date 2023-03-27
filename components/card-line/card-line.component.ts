import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-line',
  templateUrl: './card-line.component.html',
  styleUrls: ['../cards-list/cards-list.component.css','./card-line.component.css']
})
export class CardLineComponent {
  @Input() num?:string="";
  @Input() text?:string="";
  @Input() classText?:string="";;
  @Input() classNum?:string="";;
  @Input() classContainer?:string="";
 
}
