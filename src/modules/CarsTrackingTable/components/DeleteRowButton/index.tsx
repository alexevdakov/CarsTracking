import React, { MouseEventHandler } from 'react';

import { CustomIconButton } from 'components';

import { DeleteIcon } from 'assets/svg';

type DeleteRowButtonProps = {
  id: string;
  deleteTableData: (rowId: number) => MouseEventHandler;
};

function DeleteRowButton({ id, deleteTableData }: DeleteRowButtonProps) {
  return (
    <CustomIconButton
      handleClick={deleteTableData(Number(id))}
      icon={DeleteIcon}
    />
  );
}

export { DeleteRowButton };
