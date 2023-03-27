import { Component, Input } from '@angular/core';
import { recovObj } from 'src/app/data/app.data-visualization';

@Component({
  selector: 'app-recurrent-morbidity-and-recovery',
  templateUrl: './recurrent-morbidity-and-recovery.component.html',
  styleUrls: ['./recurrent-morbidity-and-recovery.component.css','../deads/deads.component.css']
})
export class RecurrentMorbidityAndRecoveryComponent {
  @Input()arrayOfVisualizationObjects=recovObj;

}
