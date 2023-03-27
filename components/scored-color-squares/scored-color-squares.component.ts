import { Component, Input } from '@angular/core';
import { colors } from 'src/app/data/app.arrays';

@Component({
  selector: 'app-color-squares',
  templateUrl: './scored-color-squares.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./scored-color-squares.component.css']
})
export class ScoredColorSquaresComponent {
@Input() graphName:string='lights';
@Input()colors:any[]=colors;
}
