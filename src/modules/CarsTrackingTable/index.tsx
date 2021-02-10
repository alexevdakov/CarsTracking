import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table } from 'components';

import { CellPropsInterface, Car } from 'types';

import { DeleteRowButton, EditRowButton } from './components';

import {
  getTableData,
  setTableRowData,
  addNewCar,
  updateTableData,
  deleteTableCar,
  getHiddenColumns,
  toggleHiddenColumn,
  setEditableRowId,
  getEditableRowId,
  cancelEditing,
} from './redux';

import { columns as initialColumns } from './tableData';

import { Section, Cover, BannerImg, TableStyles } from './styles';

function CarsTrackingTable() {
  const dispatch = useDispatch();

  const data = useSelector(getTableData);
  const hiddenColumns = useSelector(getHiddenColumns);
  const editableRowId = useSelector(getEditableRowId);

  const tableData = useMemo(() => data, [data]);

  const handleDelete = useCallback(
    (rowId: number) => () => dispatch(deleteTableCar(rowId)),
    [dispatch]
  );

  const handleUpdateTableRow = useCallback(
    (rowId: number) => () => {
      dispatch(updateTableData(rowId));
      dispatch(cancelEditing());
    },
    [dispatch]
  );

  const handleSetEditableRowId = useCallback(
    (rowId: number) => () => dispatch(setEditableRowId(rowId)),
    [dispatch]
  );

  const handleCancelEditing = useCallback(
    () => () => dispatch(cancelEditing()),
    [dispatch]
  );

  const deleteColumn = useMemo(
    () => ({
      Header: 'Удалить',
      columns: [
        {
          Header: '',
          accessor: 'delete',
          // eslint-disable-next-line react/display-name
          Cell: ({ row: { id } }: CellPropsInterface) =>
            useMemo(
              () => <DeleteRowButton id={id} deleteTableData={handleDelete} />,
              [id]
            ),
        },
      ],
    }),
    [handleDelete]
  );

  const editColumn = useMemo(
    () => ({
      Header: 'Редактировать',
      columns: [
        {
          Header: '',
          accessor: 'edit',
          // eslint-disable-next-line react/display-name
          Cell: ({ row: { id } }: CellPropsInterface) =>
            useMemo(
              () => (
                <EditRowButton
                  id={id}
                  editableRowId={editableRowId}
                  updateTableData={handleUpdateTableRow}
                  setEditableRowId={handleSetEditableRowId}
                  cancelEditing={handleCancelEditing}
                />
              ),
              [id]
            ),
        },
      ],
    }),
    [
      editableRowId,
      handleCancelEditing,
      handleSetEditableRowId,
      handleUpdateTableRow,
    ]
  );

  const tableColumns = [...initialColumns, editColumn, deleteColumn];

  const updateRowData = useCallback(
    (columnId, value) => () =>
      dispatch(
        setTableRowData({
          [columnId]: value,
        })
      ),
    [dispatch]
  );

  const handleAdd = useCallback(() => () => dispatch(addNewCar()), [dispatch]);

  const handleHideableColumns = (id: string) =>
    dispatch(toggleHiddenColumn(id));

  return (
    <Section>
      <Cover>
        <BannerImg src="../assets/banner1.jpg" />
        <TableStyles>
          {data !== undefined && (
            <Table<Car>
              name="carsTrackingTable"
              data={tableData}
              columns={tableColumns}
              onAdd={handleAdd}
              hiddenColumns={hiddenColumns}
              editableRowId={editableRowId}
              handleHideableColumns={handleHideableColumns}
              updateRow={updateRowData}
            />
          )}
        </TableStyles>
      </Cover>
    </Section>
  );
}

export { CarsTrackingTable };
