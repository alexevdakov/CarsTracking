import React, { memo } from 'react';

type ValueCellProps = {
  value: string | number;
};

function ValueCellComponent({ value }: ValueCellProps) {
  return <span>{value}</span>;
}

export const ValueCell = memo(ValueCellComponent);
