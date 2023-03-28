import { emphasisStyle } from "./app.arrays";
///getDeathsGraph
export function getDeathsGraph(timePeriod?: number, isDarkMode?: boolean) {
  let colors: string[] = !isDarkMode
    ? ['#237d7d', '#ff9482', '#EE6666', '#595d62', '#fff', '#878a96']
    : ['#9be985', '#fcc537', '#ff9482', '#595d62', '#384f5f', '#fff'];
  const fakeData = generateDataForDays(timePeriod || 25);

  return {
    color: colors,

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    grid: {
      right: '10%',
    },
    toolbox: {},
    legend: {
      data: ['', 'ממוצע נע נפטרים'],
      right: 10,
      top: 'middle',
      orient: 'vertical',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        data: fakeData[0],
        axisLabel: {
          textStyle: {
            color: colors[5], // set the color of the font
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: false,
          lineStyle: {
            color: colors[4],
          },
        },
        axisLabel: {
          formatter: '{value} ',
        },
      },
      {
        type: 'value',
        name: '',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          },
        },
        axisLabel: {
          formatter: '{value} ',
        },
      },
      {
        type: 'value',
        name: '',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[3],
          },
        },
        axisLabel: {
          formatter: '{value} ',
          textStyle: {
            color: colors[5], // set the color of the font
          },
        },
      },
    ],
    series: [
      {
        name: 'נפטרים',
        type: 'bar',
        barWidth: 6.5, // change this value to adjust the bar width

        data: fakeData[1],
      },
      {
        name: 'ממוצע נפטרים',
        type: 'line',
        symbol: 'circle',
        yAxisIndex: 2,
        data: fakeData[2],
        symbolSize: 7, // Add this line to set the symbol size
        smooth: true,
        itemStyle: {
          normal: {
            color: colors[1],
            borderColor: colors[1],
          },
          emphasis: {
            color: '#fff',
            borderColor: colors[1],
            borderWidth: 6,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
}

function generateDataForDays(
  numDays: number
): [string[], number[], number[], number[]] {
  let xAxisData: string[] = [];
  let pcrData: number[] = [];
  let antigenData: number[] = [];
  let movingAvgData: number[] = [];

  let today: Date = new Date();

  for (let i = 0; i < numDays; i++) {
    let date: Date = new Date(today);
    date.setDate(today.getDate() - numDays + i + 1);
    let dateString: string =
      date.getDate().toString().padStart(2, '0') +
      '.' +
      (date.getMonth() + 1).toString().padStart(2, '0');
    xAxisData.push(dateString);
    pcrData.push(Math.floor(Math.random() * 10));
    let maxPcrData: number = Math.max(...pcrData);
    let number = Math.floor(maxPcrData / 2 - Math.random() * 1.2);
    if (number < 0) number = Math.floor(maxPcrData / 2 - Math.random() * 1.2);
    antigenData.push(number);
    movingAvgData.push(Math.floor(Math.random() * 3));
  }

  return [xAxisData, pcrData, antigenData, movingAvgData];
}
////getTestsGraph
export function getTestsGraph(
  timePeriod?: number,
  isDarkMode?: boolean
) {
  const fakeData = generateDataForDays(timePeriod || 25);

  let colors: string[] = !isDarkMode
    ? ['#50cbfd', '#b6ca51', '#ff9482', '#fe8672', '#878a96']
    : ['#50cbfd', '#fe8672', '#daa520', '', '#fff'];

  return {
    title: {
      subtext: 'מספר הבדיקות לפי תאריך',
      show: false,
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['', '', '', ''],
    },
    grid: {
      left: '1%',
      right: '5%',
      bottom: '1%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: fakeData[0],
      axisLabel: {
        formatter: '{value} ',
        textStyle: {
          color: colors[4], // set the color of the font
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} ',
        textStyle: {
          color: colors[4], // set the color of the font
        },
      },
    },
    series: [
      {
        name: 'בדיקות PCR',
        type: 'bar',
        stack: 'one',
        barWidth: 6,
        data: fakeData[1],
        emphasis: emphasisStyle,
        itemStyle: {
          color: colors[0],
        },
      },
      {
        name: 'אנטיגן מוסדי',
        type: 'bar',
        stack: 'one',
        barWidth: 6,
        data: fakeData[2],
        emphasis: emphasisStyle,
        itemStyle: {
          color: colors[1],
        },
      },
      {
        name: 'ממוצע נע סך הבדיקות',
        type: 'line',
        stack: 'one',
        symbol: 'circle',
        symbolSize: 7, // Add this line to set the symbol size
        data: fakeData[2],
        emphasis: emphasisStyle,
        smooth: true,
        itemStyle: {
          color: colors[3],
          normal: {
            color: colors[2],
            borderColor: colors[2],
          },
          emphasis: {
            color: '#fff',
            borderColor: colors[2],
            borderWidth: 6,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
}
///getVaccGraph
export function getVaccGraph(timePeriod?: number, isDarkMode?: boolean) {
  const firstFakeData = generateDataForPercents(timePeriod || 25);
  const secondFakeData = generateDataForPercents(timePeriod || 25);
  const thirdFakeData = generateDataForPercents(timePeriod || 25);

  let colors: string[] = !isDarkMode
    ? ['#50cbfd', '#237d7d', '#b6ca51', '#fff', '#878a96']
    : ['#9be985', '#fe8672', '#2cd2db', '#384f5f', '#fff'];

  return {
    color: colors,

    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '5%',
      right: '5%',
      containLabel: true,
    },
    toolbox: {},
    legend: {
      data: ['', '', '', ''],
    },
    xAxis: [
      {
        type: 'category',

        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          rotate: 30,
          interval: 0,
          margin: 20,
          fontSize: 12,
          formatter: '{value} ',
          textStyle: {
            color: colors[4],
          },
        },

        data: [
          '5-11',
          '12-15',
          '16-19',
          '20-29',
          '30-39',
          '40-49',
          '50-59',
          '60-69',
          '70-79',
          '80+',
        ],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        position: 'right',
        alignTicks: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: colors[4],
          },
        },
        axisLabel: {
          formatter: ' ',
        },
      },
      {
        type: 'value',
        name: '',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: false,
          },
        },
        axisLabel: {
          formatter: '{value} ',
          textStyle: {
            color: colors[4],
          },
        },
      },
      {
        type: 'value',
        name: '',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#a8a9ae',
          },
        },
        axisLabel: {
          formatter: '{value} ',
          textStyle: {
            color: colors[4],
          },
        },
      },
    ],
    series: [
      {
        //לא מחוסנים
        name: 'לא מחוסנים',
        barWidth: 6.5, // change this value to adjust the bar width

        type: 'bar',
        data: firstFakeData,
      },
      {
        ///מחוסנים
        name: 'מחוסנים',
        type: 'bar',
        barWidth: 6.5, // change this value to adjust the bar width

        yAxisIndex: 1,
        data: secondFakeData,
      },
      {
        //מחוסנים ללא תוקף
        name: 'מחוסנים ללא תוקף',
        type: 'bar',
        barWidth: 6.5, // change this value to adjust the bar width

        yAxisIndex: 2,
        data: thirdFakeData,
      },
    ],
  };
}
////getFurthersGraph
export function getFurthersGraph(timePeriod?: number, isDarkMode?: boolean) {
  const positiveData = generateDataForgetFurthersGraph(30, true);
  const negativeData = generateDataForgetFurthersGraph(30, false);

  let colors: string[] = !isDarkMode
    ? ['#b6ca51', '#50cbfd', '#666']
    : ['#FD8264', '#50cbfd', '#fff'];

  return {
    title: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      valueFormatter: function (value: any, index: any) {
        return Math.abs(parseFloat(value))+"%";
      },
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '1%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      position: 'bottom',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
      axisLabel: {
        formatter: function (value: number) {
          if (value === 0) {
            return '0';
          }
          if (
            value < 0 ||
            value === -10 ||
            value === 10 ||
            value === -20 ||
            value === 20 ||
            value === -30 ||
            value === 30
          ) {
            return Math.abs(value).toString();
          }
          return '';
        },
        textStyle: {
          color: colors[2],
        },
      },
      min: -30,
      max: 30,
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: {
        axisLabel: {},
        formatter: '{value} ',
        textStyle: {
          color: colors[2],
        },
      },
      data: [
        '0-9',
        '10-19',
        '20-29',
        '30-39',
        '40-49',
        '50-59',
        '60-69',
        '70-79',
        '80-89',
        '+90',
      ],
    },

    series: [
      {
        name: 'נשים',
        type: 'bar',
        stack: 'Total',
        barWidth: 6.5, // change this value to adjust the bar width

        label: {
          show: true,
          position: 'left',
          color: colors[2],
          formatter: function (params: any) {
            return Math.abs(params.value) + '%';
          },
        },
        itemStyle: {
          color: colors[0],
        },
        data: negativeData,
      },
      {
        barWidth: 6.5, // change this value to adjust the bar width

        name: 'גברים',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'right',
          color: colors[2],
          formatter: function (params: any) {
            return params.value + '%';
          },
        },
        itemStyle: {
          color: colors[1],
        },
        data: positiveData,
      },
    ],
  };
}
function generateDataForgetFurthersGraph(period: number, isPositive: boolean) {
  const data = [];
  const startDate = new Date();
  const endDate = new Date();

  startDate.setDate(startDate.getDate() - period);

  while (startDate <= endDate) {
    const value = Math.floor(Math.random() * 20) + 1;
    data.push({ value: isPositive ? value : -value });
    startDate.setDate(startDate.getDate() + 1);
  }

  return data;
}

function generateDataForPercents(period: number) {
  const data = [];
  const startDate = new Date();
  const endDate = new Date();

  startDate.setDate(startDate.getDate() - period);

  while (startDate <= endDate) {
    data.push(Math.floor(Math.random() * 20) + 1);
    startDate.setDate(startDate.getDate() + 1);
  }

  return data;
}
