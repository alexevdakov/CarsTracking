import React, { useMemo } from 'react';

import { CellPropsInterface } from 'types';

function SpanCell({ value }: CellPropsInterface) {
  return useMemo(() => <span>{value}</span>, [value]);
}

export { SpanCell };
