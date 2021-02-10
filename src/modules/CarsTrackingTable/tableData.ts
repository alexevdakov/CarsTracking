import { LimitCell, SpanCell } from './components';

const getMonthColumnsData = () => {
  const months = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь',
  };

  const columns = Object.entries(months).map((el) => ({
    Header: el[1],
    accessor: el[0],
    isHideable: true,
    cellInputType: 'number',
  }));

  return columns;
};

const monthColumns = getMonthColumnsData();

export const columns = [
  {
    Header: 'Марка',
    columns: [
      {
        Header: '',
        accessor: 'name',
        cellInputType: 'text',
      },
    ],
  },
  {
    Header: 'Пробег',
    columns: [
      {
        Header: 'Изначальный',
        accessor: 'primordial',
        cellInputType: 'number',
      },
      ...monthColumns,
    ],
  },
  {
    Header: 'Лимит',
    columns: [
      {
        Header: 'До замены ГРМ',
        accessor: 'gdmLimit',
        cellInputType: 'number',
        isHideable: true,
      },
      {
        Header: 'До замены масла',
        accessor: 'oilLimit',
        cellInputType: 'number',
        isHideable: true,
      },
    ],
  },
  {
    Header: 'Пробег',
    columns: [
      {
        Header: 'Текущий',
        accessor: 'current',
        Cell: SpanCell,
      },
    ],
  },
  {
    Header: 'Осталось',
    columns: [
      {
        Header: 'До замены ГРМ',
        accessor: 'toGdmLimit',
        Cell: LimitCell,
      },
      {
        Header: 'До замены масла',
        accessor: 'toOilLimit',
        Cell: LimitCell,
      },
    ],
  },
];
