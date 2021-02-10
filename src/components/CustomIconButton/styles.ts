import styled from 'styled-components';
import { IconButton, SvgIcon } from '@material-ui/core';

import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIconButton = styled(IconButton)`
  display: flex;
  width: 46px;
  cursor: pointer;

  &.MuiIconButton-colorPrimary {
    color: ${colors.BORDER_HOVER_COLOR};
  }

  &.MuiIconButton-root:hover {
    background-color: #ffffff;
    border: 1px solid ${colors.PRIMARY_COLOR};
  }
`;

export const SvgIconContainer = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    width: 22px;
    height: 22px;
  }
`;
