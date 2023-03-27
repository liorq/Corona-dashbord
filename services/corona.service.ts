import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tableData1, tableData2 } from '../data/app.arrays';

@Injectable({
  providedIn: 'root',
})
export class CoronaService {
  componentNameActive = new BehaviorSubject<string>('');
  ranges = new BehaviorSubject<any[]>([]);

  isDarkModeActive = new BehaviorSubject<boolean>(false);
  isNavBarOpen = new BehaviorSubject<boolean>(false);
  timePeriodsInDays = new BehaviorSubject<any>({
    firstGraph: 30,
    secondGraph: 30,
    thirdGraph: 650,
    fourGraph: 720,
  });
  filteredData = new BehaviorSubject<{ [key: string]: [] }>({
    firstTable: tableData1,
    secondTable: tableData2,
  });
  isDropDownVisible = new BehaviorSubject<{ [key: string]: boolean }>({
    firstGraph: false,
    secondGraph: false,
    thirdGraph: false,
    fourGraph: false,
    firstTable: false,
    secondTable: false,
  });
}
