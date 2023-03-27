import { getDeathsGraph, getFurthersGraph, getTestsGraph, getVaccGraph } from "./app.graphData";




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

//////
export const graphNumber :{[key:string]:string }= {
  "main": "getDeathsGraph",
  "main1":"getTestsGraph",
 "main3" :"getVaccGraph"  ,
 "main4" :"getFurthersGraph"  ,
 "lights" :"5"  ,
 "Vaccination" :"6"  ,
};
export const tableTypes:{[key:string]:string} = {
  'lights': 'firstTable',
  'Vaccination': 'secondTable',
};
export const timePeriodsInDaysObj={
    firstGraph: 30,
    secondGraph: 30,
    thirdGraph: 650,
    fourGraph: 720,
  }
  export const DropDownVisibleObj={
    firstGraph: false,
    secondGraph: false,
    thirdGraph: false,
    fourGraph: false,
    firstTable: false,
    secondTable: false,
 }
  export const selectedOptionObj:{[key:string]:string}={
    '1': 'חודש אחרון',
    '2':  'חודש אחרון',
    '3': 'חולים פעילים',
    '4': 'מאומתים',
    '5': 'כלל הישובים',
    '6': 'כלל הישובים',
  }
