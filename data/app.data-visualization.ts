import { options, FurtherOptions, VaccOptions, lightsTable, VaccTable } from "./app.arrays";
import { getDeathsGraph, getFurthersGraph, getTestsGraph, getVaccGraph } from "./app.graphData";
import { DataVisualObj } from "./app.interfaces";
////
export const majorIndicatorsObj = [
  {
    ClassTitleContainer:'flex-end',
    TopTitle: "מדדים מרכזיים",
    isTable: false,
    title: 'מספר מאושפזים – יומי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'ממוצע מאומתים שבועי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'מאומתים חדשים יומי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
];



export const indicesObj = [
  {
    TopTitle: 'מדדי תחלואה כללית',
    isTable: false,
    title: 'אחוז תפוסת מיטות באישפוזים',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'אחוז תפיסת המיטות בבית חולים',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },

];








export const HospitalObj = [
  {
    TopTitle: 'תחלואה ואשפוזי ילדים',
    isTable: false,
    title: 'מגמת ילדים מאומתים – ממוצע נע 7 ימים',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'מגמת ילדים מבודדים – ממוצע נע 7 ימים',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: false,
    title: 'תחלואת ילדים ביחס לתחלואה הכללית -יישובים',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'מגמת ילדים באשפוז - ממוצע שבועי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: false,
    title: 'מגמת ילדים באשפוז לפי מצב רפואי - ממוצע שבועי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },

];




export const abroadObj = [
  {
    TopTitle: 'תחלואה מחו"ל',
    isTable: false,
    title: 'תושבים שנכנסו לישראל - מצב התחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'מגמת מאומתים שנכנסו לישראל',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: false,
    title: 'מאומתים הנכנסים לישראל לפי מדינות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },



];





export const recovObj = [
  {
    TopTitle: 'תחלואה חוזרת - גיל והתחסנות',
    isTable: false,
    title: 'תושבים שנכנסו לישראל - מצב התחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'תחלואה חוזרת לפי התחסנות - יומי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: false,
    title: 'מחלימים יומי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },



];










///חולים קשה
///VaccOptions
export const vaccEffObj = [
  {
    TopTitle: 'חולים קשה ומאושפזים',
    isTable: false,
    title: 'מאומתים יומי - התחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'חולים קשה - התחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {



    isTable: false,
    title: 'חולים פעילים - גיל והתחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: getVaccGraph(25, false),
    periodOfTime: 25,
    tablesData: [],
    graphSize: 'width: 100%; height: 325px;',
    textDownGraph: "",
    textAboveGraph: 'חולים פעילים',
    ClassTextAboveGraph: 'testByDates2',
    graphName: 'main3',
    selectBoxId: "",
    selectedOption: '',
    tableHeaderId: "",
    classContainer: "",
    options: VaccOptions,
  },



];
export const deadsObj:DataVisualObj[] = [
  {


    // TopTitle: 'נפטרים',
    isTable: false,
    title: 'נפטרים יומי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: getDeathsGraph(25, false),
    periodOfTime: 25,
    tablesData: [],
    graphSize: 'width: 100%; height: 295px;',
    textDownGraph:  'תאריך',
    textAboveGraph: 'מספר נפטרים',
    ClassTextAboveGraph: 'testByDates2',
    graphName: 'main',
    selectBoxId: "",
    selectedOption: '',
    tableHeaderId: "",
    classContainer: "",
    options: options,
  },
  {
    isTable: undefined,
    title: 'נפטרים יומי-מצב ההתחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: 'width: 100%; height: 295px;',
    textDownGraph: '',
    textAboveGraph: '',
    ClassTextAboveGraph: 'testByDates1',
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },




];

export const FurtherObj = [

  {
    TopTitle: 'תחקורים נוספים',
    isTable: undefined,
    title: 'ממוצע מאומתים שבועי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: '',
    textDownGraph: '',
    textAboveGraph: '',
    ClassTextAboveGraph: '',
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {


    isTable: false,
    title: 'פילוח מדדים שונים על פי גיל ומין',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: getFurthersGraph(25, false),
    periodOfTime: 25,
    tablesData: [],
    graphSize: 'width:95%; height: 290px;',
    textDownGraph:  '',
    textAboveGraph: 'קבוצת גיל',
    ClassTextAboveGraph: 'testByDates4',
    graphName: 'main4',
    selectBoxId: "",
    selectedOption: '',
    tableHeaderId: "",
    classContainer: "",
    options: FurtherOptions,
  },
  {
    isTable: undefined,
    title: 'תחקור תחלואה לאור אירועים והתחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: '',
    textDownGraph: '',
    textAboveGraph: '',
    ClassTextAboveGraph: '',
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },




];






export const testObj = [
  {
    TopTitle: 'בדיקות',
    isTable: undefined,
    title: 'תושבים שנכנסו לישראל - מצב התחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'מגמת מאומתים שנכנסו לישראל',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },{
    isTable: undefined,
    title: 'מאומתים הנכנסים לישראל לפי מדינות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },



  {


    isTable: false,
    title: 'מספר בדיקות קורונה - יומי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: getTestsGraph(25, false),
    periodOfTime: 25,
    tablesData: [],
    graphSize: 'width: 80%; height: 240px;',
    textDownGraph: 'תאריך',
    textAboveGraph: 'מספר הבדיקות',
    ClassTextAboveGraph: 'testByDates3',
    graphName: 'main1',
    selectBoxId: "",
    selectedOption: '',
    tableHeaderId: "",
    classContainer: "",
    options: options,
  },
  {
    isTable: undefined,
    title: 'תחקור תחלואה לאור אירועים והתחסנות',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: '',
    textDownGraph: '',
    textAboveGraph: '',
    ClassTextAboveGraph: '',
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },




];









export const VaccPopObj = [
  {
    TopTitle: 'התחסנות האוכלוסיה',
    isTable: undefined,
    title: 'מספר התחסנויות - יומי',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },
  {
    isTable: undefined,
    title: 'מתחסנים מצטבר',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },{
    isTable: undefined,
    title: 'אחוז מתחסנים לפי קבוצות גיל',
    chart: null,
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },



  {


    isTable: true,
    title: 'התחסנות לפי ישובים',
    tablesData: VaccTable,
    graphName: 'Vaccination',
    selectBoxId: "selectBoxId2",
    selectedOption: 'כלל הישובים',
    tableHeaderId: "tableHeaderId2",
    classTable: 'container-vac-table',
  },

];


export const lightsObj = [
  {

    TopTitle: 'רמזור בישובים',

    isTable: true,
    title: 'תוכנית הרמזור',
    tablesData: lightsTable,
    graphName: 'lights',
    selectBoxId: "selectBoxId1",
    selectedOption: 'כלל הישובים',
    tableHeaderId: "tableHeaderId1",
    classTable: 'container-light-table',
  },
  {
    isTable: false,
    title: 'פילוח ציוני רמזור ישובים',
    resizeTimeoutId: undefined,
    optionObj: {},
    periodOfTime: 25,
    tablesData: [],
    graphSize: "",
    textDownGraph: "",
    textAboveGraph: "",
    ClassTextAboveGraph: "",
    graphName: "",
    selectBoxId: "",
    selectedOption: "",
    tableHeaderId: "",
    classContainer: "",
    options: "",
  },





];
