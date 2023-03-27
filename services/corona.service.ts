import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { lightsTable, VaccTable } from '../data/app.arrays';
import { DropDownVisibleObj, timePeriodsInDaysObj } from '../data/app.objects';

@Injectable({
  providedIn: 'root',
})
export class CoronaService {
  componentNameActive = new BehaviorSubject<string>('');
  ranges = new BehaviorSubject<any[]>([]);
  isDarkModeActive = new BehaviorSubject<boolean>(false);
  isNavBarOpen = new BehaviorSubject<boolean>(false);
  timePeriodsInDays = new BehaviorSubject<any>(timePeriodsInDaysObj);
  filteredData = new BehaviorSubject<{ [key: string]: [] }>({
  firstTable: lightsTable,
  secondTable: VaccTable,
  });
  isDropDownVisible = new BehaviorSubject<{ [key: string]: boolean }>(DropDownVisibleObj);
}
