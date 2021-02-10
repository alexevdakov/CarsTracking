import React, { useMemo } from 'react';

import { CellPropsInterface } from 'types';

import { Limit } from './styles';

function LimitCell({ value }: CellPropsInterface) {
  return useMemo(() => <Limit isNegative={value < 0}>{value}</Limit>, [value]);
}

export { LimitCell };
