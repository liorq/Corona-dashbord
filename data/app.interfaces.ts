export interface DataVisualObj {

  isTable?: boolean;
  title?: string;
  chart?: echarts.ECharts | null;
  resizeTimeoutId?: string;
  optionObj?: {};
  periodOfTime?: number|string;
  tablesData?: any[];
  graphSize?: string;
  textDownGraph?: string;
  textAboveGraph?: string;
  ClassTextAboveGraph?: string;
  TopTitle?: string,
  graphName?: string;
  selectBoxId?: string;
  selectedOption?: string;
  tableHeaderId?: string;
  classContainer?: string;
  options?: {}|undefined;
}
export interface TableRow {
  id: number|string;
  name: string|number;
  age: string|number;
  email: string|number;
  phone: string|number;
  address: string|number;
}
export interface Link {
  pictureClass: string;
  link: string;
  title: string;
  description: string;
}
export type Option = {
  label: string;
  value: number;
  isRadioBtnNeeded: boolean;
  name: string;
};
