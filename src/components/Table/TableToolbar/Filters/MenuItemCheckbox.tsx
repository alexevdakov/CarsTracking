import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ColumnInstance, IdType } from 'react-table';

import { HandleHideableColumns } from 'types';

import { ActiveFilterIcon, NeutralFilterIcon } from 'assets/svg';

import { SvgIconContainer, StyledFormControl } from './styles';

type MenuItemCheckboxProps<T extends Record<string, unknown>> = {
  column: ColumnInstance<T>;
  onlyOneOptionLeft: boolean;
  handleHideableColumns: HandleHideableColumns;
  toggleHideColumn: (columnId: IdType<T>, value?: boolean | undefined) => void;
};

const NeutralIcon = () => (
  <SvgIconContainer>
    <NeutralFilterIcon />
  </SvgIconContainer>
);

const ActiveIcon = () => (
  <SvgIconContainer>
    <ActiveFilterIcon />
  </SvgIconContainer>
);

function MenuItemCheckbox<T extends Record<string, unknown>>({
  column,
  onlyOneOptionLeft,
  handleHideableColumns,
  toggleHideColumn,
}: MenuItemCheckboxProps<T>) {
  const handleChange = () => {
    handleHideableColumns(column.id);
    toggleHideColumn(column.id, column.isVisible);
  };

  return (
    <StyledFormControl
      control={
        <Checkbox
          icon={<ActiveIcon />}
          checkedIcon={<NeutralIcon />}
          value={`${column.id}`}
          disabled={column.isVisible && onlyOneOptionLeft}
        />
      }
      labelPlacement="start"
      label={column.render('Header')}
      checked={column.isVisible}
      onChange={handleChange}
    />
  );
}

export { MenuItemCheckbox };
