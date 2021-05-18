import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  height: 70px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #ffffff;
`;

export const HelpersContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const ButonsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
