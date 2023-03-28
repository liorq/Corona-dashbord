import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { lightsTable, VaccTable } from '../data/app.arrays';
import { DropDownVisibleObj, timePeriodsInDaysObj } from '../data/app.objects';
import { TableRow } from '../data/app.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  ActiveComponentName = new BehaviorSubject<string>('');
  ranges = new BehaviorSubject<any[]>([]);
  isDarkModeActive = new BehaviorSubject<boolean>(false);
  isNavBarOpen = new BehaviorSubject<boolean>(false);
  timePeriodsInDays = new BehaviorSubject<any>(timePeriodsInDaysObj);
  filteredData = new BehaviorSubject<{ [key: string]: []|TableRow[] }>({
  firstTable: lightsTable,
  secondTable: VaccTable,
  });
  isDropDownVisible = new BehaviorSubject<{ [key: string]: boolean }>(DropDownVisibleObj);
}
