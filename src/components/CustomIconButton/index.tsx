import React, { MouseEvent } from 'react';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

import { Container, StyledIconButton, SvgIconContainer } from './styles';

type CustomIconButtonProps = {
  icon:
    | React.FC<React.SVGProps<SVGSVGElement>>
    // eslint-disable-next-line @typescript-eslint/ban-types
    | OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  handleClick: (event: MouseEvent) => void;
};

function CustomIconButton({ handleClick, icon: Icon }: CustomIconButtonProps) {
  return (
    <Container>
      <StyledIconButton color="primary" onClick={handleClick}>
        <SvgIconContainer>
          <Icon />
        </SvgIconContainer>
      </StyledIconButton>
    </Container>
  );
}

export { CustomIconButton };
