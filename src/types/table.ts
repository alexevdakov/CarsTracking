import { MouseEventHandler, FocusEventHandler } from 'react';
import {
  TableInstance,
  TableOptions,
  Row,
  CellProps,
  IdType,
} from 'react-table';

import { Car } from './entities';

export interface TableProperties<T extends Record<string, unknown>>
  extends TableOptions<T> {
  name: string;
  hiddenColumns: IdType<T>[];
  editableRowId: number | null;
  handleHideableColumns: HandleHideableColumns;
  updateRow: UpdateRow;
  onAdd: (instance: TableInstance<T>) => MouseEventHandler;
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
  onClick?: (row: Row<T>) => void;
}

export type TableToolbarProps<T extends Record<string, unknown>> = {
  instance: TableInstance<T>;
  handleHideableColumns: HandleHideableColumns;
  onAdd: (instance: TableInstance<T>) => MouseEventHandler;
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
};

export type InstanceActionButton<T extends Record<string, unknown>> = {
  instance: TableInstance<T>;
  icon?: JSX.Element;
  onClick: (instance: TableInstance<T>) => MouseEventHandler;
  enabled?: (instance: TableInstance<T>) => boolean;
  label: string;
  variant?: 'right' | 'left';
};

export interface EditableCellProps<T extends Record<string, unknown>>
  extends CellProps<T> {
  editableRowId: number | null;
  updateRow: UpdateRow;
}

export interface ExtendedCellProps extends CellProps<Car> {
  editableRowId: number | null;
}

export type FiltersHideProps<T extends Record<string, unknown>> = {
  instance: TableInstance<T>;
  anchorEl?: Element;
  onClose: () => void;
  show: boolean;
};

export type HandleHideableColumns = (
  id: string
) => {
  payload: string;
  type: string;
};

export type CellPropsInterface = CellProps<Car>;

export type UpdateRow = (
  columnId: IdType<Car>,
  value: any
) => FocusEventHandler;
