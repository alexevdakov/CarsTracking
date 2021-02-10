import React, { useState, useEffect, ChangeEvent, memo } from 'react';

import { EditableCellProps } from 'types';

import { ValueCell } from './ValueCell';

import { Field } from './styles';

function EditableCellComponent<T extends Record<string, unknown>>({
  value: initialValue,
  row: { index },
  column: { id, cellInputType },
  editableRowId,
  updateRow,
}: EditableCellProps<T>) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue, editableRowId]);

  return editableRowId === index ? (
    <Field
      value={value}
      onChange={onChange}
      onBlur={updateRow(id, value)}
      type={cellInputType || 'text'}
      variant="outlined"
    />
  ) : (
    <ValueCell value={value} />
  );
}

export const EditableCell = memo(EditableCellComponent);
