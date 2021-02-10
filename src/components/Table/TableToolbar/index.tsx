import React, { PropsWithChildren } from 'react';
import AddIcon from '@material-ui/icons/Add';

import { TableToolbarProps } from 'types';

import { Filters } from './Filters';
import { InstanceSmallIconActionButton } from './InstanceSmallIconActionButton';

import { ToolbarContainer, HelpersContainer, ButonsContainer } from './styles';

function TableToolbar<T extends Record<string, unknown>>({
  instance,
  onAdd,
  handleHideableColumns,
}: PropsWithChildren<TableToolbarProps<T>>) {
  return (
    <ToolbarContainer>
      <HelpersContainer>
        <Filters
          instance={instance}
          handleHideableColumns={handleHideableColumns}
        />
      </HelpersContainer>
      <ButonsContainer>
        <InstanceSmallIconActionButton
          instance={instance}
          icon={<AddIcon />}
          onClick={onAdd}
          label="Add"
        />
      </ButonsContainer>
    </ToolbarContainer>
  );
}

export { TableToolbar };
