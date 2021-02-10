import { createSelector } from '@reduxjs/toolkit';

import { Car } from 'types';
import { RootState } from '../../../store/rootReducer';

import { TableState } from './slice';

const tableState = (state: RootState): TableState<Car> => state.table;

export const getTableData = createSelector(tableState, ({ data }) => data);

export const getHiddenColumns = createSelector(
  tableState,
  ({ hiddenColumns }) => hiddenColumns
);

export const getEditableRowId = createSelector(
  tableState,
  ({ editableRowId }) => editableRowId
);
