import styled from 'styled-components';

import { colors } from 'styles';

type LimitProps = {
  isNegative: boolean;
};

export const Limit = styled.span<LimitProps>`
  color: ${({ isNegative }) =>
    isNegative ? colors.NEGATIV_COLOR : colors.POSITIVE_COLOR};
`;
