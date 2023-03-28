import { Component, Input } from '@angular/core';
import { Option } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css','../generic-table/generic-table.component.css',
  '../my-options/my-options.component.css',]
})
export class OptionComponent {
@Input()innerOption?:any;
@Input()selectedOptions:any[]=[];
eventStopProp(event: Event) {
  console.log(this.selectedOptions)
  event?.stopPropagation();
}
}
