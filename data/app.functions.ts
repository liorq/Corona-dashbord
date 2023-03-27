export function getTableData(isDarkModeActive?: boolean, graphName?: string) {
  const headersOfLightTable = [
    {
      ContainerNgClass: {
        'basic-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'lights',
      sortField: 'id',
      ContainerClass: 'align-div cell title',
      text: 'חולים פעילים',
    },
    {
      ContainerNgClass: {
        'lavender-background': true,
        'dark-deep-gray': isDarkModeActive,
      },
      graphName: 'lights',
      sortField: 'name',
      ContainerClass: 'align-div cell title',
      text: 'שיעור שינוי מאומתים',
    },

    {
      ContainerNgClass: {
        'lavender-background': true,
        'dark-deep-gray': isDarkModeActive,
      },
      graphName: 'lights',
      sortField: 'age',
      ContainerClass: 'align-div cell title',
      text: '% הבדיקות החיוביות',
    },

    {
      ContainerNgClass: {
        'lavender-background': true,
        'dark-deep-gray': isDarkModeActive,
      },
      graphName: 'lights',
      sortField: 'email',
      ContainerClass: 'align-div cell title',
      text: 'חולים חדשים לכל 10,000 נפש',
    },

    {
      ContainerNgClass: {
        'basic-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'lights',
      sortField: 'phone',
      ContainerClass: 'align-div cell title',
      text: 'ציון וצבע יומי',
    },
    {
      ContainerNgClass: {
        'basic-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'lights',
      sortField: 'address',
      ContainerClass: 'align-div cell title',
      text: 'ישוב',
    },
  ];

  const headersOfVaccinationTable = [
    {
      ContainerNgClass: {
        'weak-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'Vaccination',
      sortField: 'address',
      ContainerClass: 'align-div cell title',
      text: 'ישוב',
    },

    {
      ContainerNgClass: {
        'weak-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'Vaccination',
      sortField: 'phone',
      ContainerClass: 'align-div cell title',
      text: 'מתחסנים במנה ראשונה %',
    },

    {
      ContainerNgClass: {
        'weak-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'Vaccination',
      sortField: 'email',
      ContainerClass: 'align-div cell title',
      text: '% מתחסנים מנה שנייה',
    },

    {
      ContainerNgClass: {
        'weak-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'Vaccination',
      sortField: 'age',
      ContainerClass: 'align-div cell title',
      text: '% מתחסנים מנה שלישית',
    },

    {
      ContainerNgClass: {
        'weak-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'Vaccination',
      sortField: 'name',
      ContainerClass: 'align-div cell title',
      text: 'חולים פעילים לכל 10,000 נפש',
    },

    {
      ContainerNgClass: {
        'weak-lavender': true,
        'deep-blue': isDarkModeActive,
      },
      graphName: 'Vaccination',
      sortField: 'id',
      ContainerClass: 'align-div cell title',
      text: 'ציון וצבע יומי',
    },
  ];
  return graphName === 'lights'
    ? headersOfLightTable
    : headersOfVaccinationTable;
}
export function getClarificationDarkModeNgClass(isDarkModeActive: boolean) {
  return { 'pic-graph-light-dark': isDarkModeActive };
}
////for a multiples uses

export function getNgClassForBtns(isDarkModeActive: boolean) {
  return { 'deep-blue-btn': isDarkModeActive };
}

export function getSearchOptionsInputClass(graphName: string | undefined) {
  return {
    'options-list-for-table1': graphName == 'Vaccination',
    'options-list-for-table2': graphName != 'Vaccination',
  };
}



export function getSelectBoxBtnsClass(isDarkModeActive: boolean | undefined) {
  return { 'selected-option-darkMode': isDarkModeActive };
}
export function getSelectBoxRecClass(
  isDarkModeActive: boolean | undefined,
  dropdownVisible: boolean | undefined
) {
  return {
    'center-half-rectangle': !isDarkModeActive,
    'center-half-rectangle-dark': isDarkModeActive,
    rotate: dropdownVisible,
  };
}

export function getCurrentSortObj() {
  return { column: 'id', direction: 'asc' };
}
export function getNgClassTableHdrCmp(isDarkModeActive: boolean | undefined) {
  return { 'deep-blue': isDarkModeActive,

};
}


export function getTableBodyClassNg(
  row: any,
  position: number,
  graphName: string | undefined
) {
  const firstObj = {
    fontWeight400: graphName == 'Vaccination',
    color: graphName == 'lights',
    orange: row.phone > 6 && row.phone < 7.5,
    red: row.phone > 7.5,
    green: row.phone < 4.5,
    yellow: row.phone > 4.5 && row.phone < 6,
  };
  const secondObj = {
    color2: graphName == 'Vaccination',
    lightgreen: row.id < 4.5,
    yellow: row.id > 4.6 && row.id < 5.9,
    orange: row.id > 6.1 && row.id < 8.5,
  };

  return position == 2 ? secondObj : firstObj;
}


export function getGraphLegendList(isDarkModeActive: boolean) {
  return [
    {
      graphName: 'main1',
      title: 'ממוצע נע סך הבדיקות',
      color: 'salmon',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main1',
      title: 'אנטיגן מוסדי',
      color: 'gold',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main1',
      title: 'בדיקות PCR',
      color: 'blue',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main',
      title: 'ממוצע נע נפטרים',
      color: 'salmon',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main',
      title: 'נפטרים',
      color: 'turkiz',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main3',
      title: 'מחוסנים',
      color: 'turkiz',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main3',
      title: 'מחוסנים ללא תוקף',
      color: 'gold',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main3',
      title: 'לא מחוסנים',
      color: 'blue',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main1',
      title: 'ממוצע נע סך הבדיקות',
      color: 'orange',
      isDarkMode: !isDarkModeActive,
    },
    {
      graphName: 'main1',
      title: 'אנטיגן מוסדי',
      color: 'salmon',
      isDarkMode: !isDarkModeActive,
    },
    {
      graphName: 'main1',
      title: 'בדיקות PCR',
      color: 'aqua',
      isDarkMode: !isDarkModeActive,
    },
    {
      graphName: 'main',
      title: 'ממוצע נע נפטרים',
      color: 'lightgreen',
      isDarkMode: !isDarkModeActive,
    },
    {
      graphName: 'main',
      title: 'נפטרים',
      color: 'goldenrod',
      isDarkMode: !isDarkModeActive,
    },
    {
      graphName: 'main3',
      title: 'מחוסנים',
      color: 'lightgreen',
      isDarkMode: !isDarkModeActive,
    },
    {
      graphName: 'main3',
      title: 'מחוסנים ללא תוקף',
      color: 'salmon',
      isDarkMode: !isDarkModeActive,
    },
    {
      graphName: 'main3',
      title: 'לא מחוסנים',
      color: 'aqua',
      isDarkMode: !isDarkModeActive,
    },
       {
      graphName: 'main4',
      title: 'נשים',
      color: 'salmon',
      isDarkMode: !isDarkModeActive,
    },


    {
      graphName: 'main4',
      title: 'גברים',
      color: 'aqua',
      isDarkMode: !isDarkModeActive,
    },
    {
      graphName: 'main4',
      title: 'נשים',
      color: 'gold',
      isDarkMode: isDarkModeActive,
    },
    {
      graphName: 'main4',
      title: 'גברים',
      color: 'aqua',
      isDarkMode: isDarkModeActive,
    },
  ];
}


////getNgClassForDataVis

export function getNgClassForDataVis(
  isDarkModeActive: boolean,
  isTable: boolean | undefined,
  graphName: string
) {
  return {
    'white-color': isDarkModeActive,
    TableWidth: isTable,
    TableWidth100: graphName == 'Vaccination',
  };
}
