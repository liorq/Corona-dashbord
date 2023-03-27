import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variable-graph-label',
  templateUrl: './variable-graph-label.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./variable-graph-label.component.css']
})
export class VariableGraphLabelComponent {
  @Input()items?:any[];
  @Input()graphName?:string;
}
