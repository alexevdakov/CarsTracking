import React, { ReactElement, MouseEvent } from 'react';
import { TableInstance } from 'react-table';

import { HandleHideableColumns } from 'types';

import { FilterIcon } from 'assets/svg';

import { MenuItemCheckbox } from './MenuItemCheckbox';

import {
  Container,
  FilterButton,
  FilterIconContainer,
  FilterMenu,
  FilterTitle,
  FilterMenuItem,
} from './styles';

type ColumnHidePageProps<T extends Record<string, unknown>> = {
  instance: TableInstance<T>;
  handleHideableColumns: HandleHideableColumns;
};

function Filters<T extends Record<string, unknown>>({
  instance,
  handleHideableColumns,
}: ColumnHidePageProps<T>): ReactElement | null {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  const { allColumns, toggleHideColumn } = instance;

  const hideableColumns = allColumns.filter(
    (column) => column.isHideable === true
  );

  const checkedCount = hideableColumns.reduce(
    (acc, val) => acc + (val.isVisible ? 0 : 1),
    0
  );

  const onlyOneOptionLeft = checkedCount + 1 >= hideableColumns.length;

  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <FilterButton
        aria-controls="filters-menu"
        aria-haspopup="true"
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        <FilterIconContainer>
          <FilterIcon />
        </FilterIconContainer>
        Фильтр
      </FilterButton>
      <FilterMenu
        id="filters-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <FilterTitle>Скрыть :</FilterTitle>
        {hideableColumns.map((column) => (
          <FilterMenuItem disableGutters key={column.id}>
            <MenuItemCheckbox
              column={column}
              onlyOneOptionLeft={onlyOneOptionLeft}
              handleHideableColumns={handleHideableColumns}
              toggleHideColumn={toggleHideColumn}
            />
          </FilterMenuItem>
        ))}
      </FilterMenu>
    </Container>
  );
}

export { Filters };
