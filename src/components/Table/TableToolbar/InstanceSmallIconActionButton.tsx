import React, { ReactElement } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';

import { InstanceActionButton } from 'types';

export const InstanceSmallIconActionButton = <
  T extends Record<string, unknown>
>({
  instance,
  icon,
  onClick,
  label,
  enabled = () => true,
}: InstanceActionButton<T>): ReactElement => {
  return (
    <Tooltip title={label} aria-label={label}>
      <span>
        <IconButton onClick={onClick(instance)} disabled={!enabled(instance)}>
          {icon}
        </IconButton>
      </span>
    </Tooltip>
  );
};
