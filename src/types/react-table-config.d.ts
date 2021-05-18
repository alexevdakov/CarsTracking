import {
  UseFiltersColumnOptions,
  UseGroupByColumnOptions,
  UseResizeColumnsColumnOptions,
  UseSortByColumnOptions,
} from 'react-table';

/* eslint-disable @typescript-eslint/ban-types */
declare module 'react-table' {
  export interface ColumnInstance<D extends object = {}>
    extends UseFiltersColumnOptions<D>,
      UseGroupByColumnOptions<D>,
      UseResizeColumnsColumnOptions<D>,
      UseSortByColumnOptions<D> {
    isHideable?: boolean;
    cellInputType?: 'text' | 'number';
  }
}
