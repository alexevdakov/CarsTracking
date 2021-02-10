import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { colors } from 'styles';

export const Field = styled(TextField)`
  .MuiInputBase-root {
    width: 100px;
    height: 40px;

    :hover {
      background-color: #ffffff;
    }

    // Remove arrows
    .MuiOutlinedInput-input {
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &.MuiOutlinedInput-root {
      color: ${colors.DARK_COLOR};

      fieldset {
        border-color: ${colors.BORDER_COLOR};
      }

      &:hover fieldset {
        border-color: ${colors.BORDER_HOVER_COLOR};
      }

      &.Mui-focused fieldset {
        border-color: ${colors.BORDER_HOVER_COLOR};
      }
    }
  }
`;
