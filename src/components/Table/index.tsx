import React, { PropsWithChildren } from 'react';
import { useTable } from 'react-table';

import { TableProperties } from 'types';

import { TableToolbar } from './TableToolbar';
import { EditableCell } from './EditableCell';

const defaultColumn = {
  Cell: EditableCell,
};

function Table<T extends Record<string, unknown>>(
  props: PropsWithChildren<TableProperties<T>>
) {
  const { onAdd, hiddenColumns, handleHideableColumns } = props;

  const instance = useTable<T>({
    ...props,
    defaultColumn,
    initialState: {
      hiddenColumns,
    },
  });

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
  } = instance;

  return (
    <>
      <TableToolbar {...{ onAdd, handleHideableColumns }} instance={instance} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, headerIndex) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={`header-group-item-${headerIndex}`}
            >
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  key={`header-column-${columnIndex}`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`row-item-${rowIndex}`}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={`row-cell-item-${cellIndex}`}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export { Table };
