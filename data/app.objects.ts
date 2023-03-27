import { getDeathsGraph, getFurthersGraph, getTestsGraph, getVaccGraph } from "./app.graphData";

export const componentNames: any = {
  'מבט על': 'view-on',
  'מדדים מרכזיים': 'major-indicators-component',
  'מדדי תחלואה כללית': 'indices-of-general-morbidity-component',
  'תחלואה ואשפוזי ילדים': 'morbidity-and-hospitalizations-component',
  'תחלואה מחול': 'morbidity-from-abroad-component',
  'השפעת התחסנות על התחלואה': 'effect-of-vaccination-on-morbidity-component',
  נפטרים: 'deads-component',
  בדיקות: 'tests-component',
  'תחקורים נוספים': 'further-investigations-component',
  'תחלואה חוזרת ומחלימים': 'recurrent-morbidity-and-recovery-component',
  'התחסנות האוכלוסיה': 'vaccination-of-the-population-component',
  'רמזור בישובים': 'lights-in-settlements-component',
};



export const graphDropdownMap: { [key: string]: string } = {
  main: 'firstGraph',
  main1: 'secondGraph',
  main3: 'thirdGraph',
  main4: 'fourGraph',
  lights: 'firstTable',
  Vaccination: 'secondTable',
};
export const graphNameObj: { [key: string]: string } = {
  lights: 'firstTable',
  Vaccination: 'secondTable',
};
export const optionFunctions :{[key:string]:Function }= {
  "getDeathsGraph": getDeathsGraph,
  "getTestsGraph": getTestsGraph,
  "getVaccGraph": getVaccGraph,
  "getFurthersGraph": getFurthersGraph,
};
export const graphNumber :{[key:string]:string }= {
  "main": "1",
  "main1":"2",
 "main3" :"3"  ,
 "main4" :"4"  ,
 "lights" :"5"  ,
 "Vaccination" :"6"  ,
};
export const tableTypes:{[key:string]:string} = {
  'lights': 'firstTable',
  'Vaccination': 'secondTable',
};
