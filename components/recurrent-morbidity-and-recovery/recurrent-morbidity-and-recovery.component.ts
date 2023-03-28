import { Component, Input } from '@angular/core';
import { recovObj } from 'src/app/data/app.data-visualization';
import { DataVisualObj } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-recurrent-morbidity-and-recovery',
  templateUrl: './recurrent-morbidity-and-recovery.component.html',
  styleUrls: ['./recurrent-morbidity-and-recovery.component.css','../deads/deads.component.css']
})
export class RecurrentMorbidityAndRecoveryComponent {
  @Input()visObjsArray:DataVisualObj[]=recovObj;

}
