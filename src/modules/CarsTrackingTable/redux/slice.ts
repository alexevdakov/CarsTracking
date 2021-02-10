import { createAction, createSlice } from '@reduxjs/toolkit';
import { IdType } from 'react-table';

import { Car, EditableCar } from 'types';

import { newCar, hiddenColumns, calculateLimits } from './helpers';

export type TableState<T extends Record<string, unknown>> = Readonly<{
  data: Car[];
  editableRowData: EditableCar;
  hiddenColumns: IdType<T>[];
  editableRowId: number | null;
}>;

const initialState: TableState<Car> = {
  data: [newCar],
  editableRowData: {} as EditableCar,
  hiddenColumns,
  editableRowId: null,
};

export const setTableData = createAction<Car[]>('table/setTableData');
export const setEditableRowId = createAction<number | null>(
  'table/setEditableRowId'
);
export const setTableRowData = createAction<EditableCar>(
  'table/updateTableRow'
);
export const cancelEditing = createAction('table/cancelEditing');

export const addNewCar = createAction('table/addNewCar');
export const updateTableData = createAction<number>('table/updateTableData');
export const deleteTableCar = createAction<number>('table/deleteTableCar');
export const toggleHiddenColumn = createAction<string>(
  'table/setHiddenColumns'
);

const carsTrackingTableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setTableData, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(setEditableRowId, (state, { payload: id }) => {
        state.editableRowId = id;
      })
      .addCase(setTableRowData, (state, { payload }) => {
        state.editableRowData = {
          ...state.editableRowData,
          ...payload,
        };
      })
      .addCase(cancelEditing, (state) => {
        state.editableRowData = {};
        state.editableRowId = null;
      })
      .addCase(addNewCar, (state) => {
        state.data.push(newCar);
      })
      .addCase(
        updateTableData,
        ({ data, editableRowData }, { payload: rowId }) => {
          const currentCarData = data[rowId];

          const updatedCar = {
            ...currentCarData,
            ...editableRowData,
          };

          const carWithLimits = calculateLimits(updatedCar);

          data[rowId] = carWithLimits;
        }
      )
      .addCase(deleteTableCar, ({ data }, { payload: rowId }) => {
        data.splice(rowId, 1);
      })
      .addCase(toggleHiddenColumn, (state, { payload: id }) => {
        const index = state.hiddenColumns.findIndex(
          (columnId) => columnId === id
        );

        if (index === -1) {
          state.hiddenColumns.push(id);
        } else {
          state.hiddenColumns.splice(index, 1);
        }
      });
  },
});

export const tableReducer = carsTrackingTableSlice.reducer;
