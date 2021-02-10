import React, { MouseEventHandler, memo } from 'react';
import { SaveAltOutlined, CancelOutlined } from '@material-ui/icons';

import { CustomIconButton } from 'components';

import { EditIcon } from 'assets/svg';

import { Container } from './styles';

type EditRowButtonProps = {
  id: string;
  editableRowId: number | null;
  updateTableData: (rowId: number) => MouseEventHandler;
  setEditableRowId: (rowId: number) => MouseEventHandler;
  cancelEditing: () => MouseEventHandler;
};

function EditRowButtonComponent({
  id,
  editableRowId,
  updateTableData,
  setEditableRowId,
  cancelEditing,
}: EditRowButtonProps) {
  return editableRowId !== +id ? (
    <CustomIconButton
      icon={EditIcon}
      handleClick={setEditableRowId(Number(id))}
    />
  ) : (
    <Container>
      <CustomIconButton
        icon={SaveAltOutlined}
        handleClick={updateTableData(Number(id))}
      />
      <CustomIconButton icon={CancelOutlined} handleClick={cancelEditing()} />
    </Container>
  );
}

export const EditRowButton = memo(EditRowButtonComponent);
