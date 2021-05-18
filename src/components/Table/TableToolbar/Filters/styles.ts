import styled from 'styled-components';
import {
  SvgIcon,
  FormControlLabel,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { colors } from 'styles';

export const Container = styled.div``;

export const SvgIconContainer = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    width: 15px;
    height: 15px;
  }
`;

export const FilterIconContainer = styled(SvgIcon)`
  margin-right: 10px;

  &.MuiSvgIcon-root {
    width: 20px;
    height: 20px;
  }
`;

export const StyledFormControl = styled(FormControlLabel)`
  &.MuiFormControlLabel-labelPlacementStart {
    flex: 1;
    justify-content: space-between;
    height: 100%;
    margin-left: 0;

    .MuiTypography-body1 {
      font-size: 14px;
    }
  }
`;

export const FilterButton = styled(Button)`
  &.MuiButton-outlinedPrimary {
    padding: 10px;
    color: ${colors.DARK_COLOR};
    border: 1px solid ${colors.BORDER_COLOR};

    :hover {
      border: 1px solid ${colors.PRIMARY_COLOR};
    }
  }
`;

export const FilterMenu = styled(Menu)`
  .MuiMenu-paper {
    width: 200px;
    margin-top: 5px;
    padding: 20px 15px;
    border: 1px solid ${colors.BORDER_COLOR};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 8px;

    .MuiMenu-list {
      padding: 0;
    }
  }
`;

export const FilterTitle = styled.span`
  font-family: 'Inter-Regular';
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: ${colors.PRIMARY_COLOR};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const FilterMenuItem = styled(MenuItem)`
  &.MuiListItem-button:hover {
    border-radius: 6px;
  }

  &.MuiMenuItem-root {
    height: 30px;
    padding: 0;
    padding-right: 5px;

    .MuiFormControlLabel-labelPlacementStart .MuiTypography-body1 {
      font-family: 'Inter-Regular';
      font-size: 14px;
      letter-spacing: 0.05em;
      color: ${colors.DARK_COLOR};
    }

    &:not(:first-child) {
      margin-top: 5px;
    }
  }
`;
