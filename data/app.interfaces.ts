export interface GraphTableObject {
  isTable?: boolean;
  title?: string;
  chart: echarts.ECharts | null;
  resizeTimeoutId?: any;
  optionObj?: {};
  periodOfTime: number;
  tablesData?: any[];
  graphSize: string;
  textDownGraph?: string;
  textAboveGraph?: string;
  ClassTextAboveGraph?: string;
  graphName: string;
  selectBoxId?: string;
  selectedOption?: string;
  tableHeaderId?: string;
  classContainer?: string;
  options: any;
  graph: any;
}
