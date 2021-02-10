import styled from 'styled-components';

import { colors } from 'styles';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  color: #ffffff;
`;

export const Cover = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  background: #000;
`;

export const BannerImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  object-fit: cover;
`;

export const TableStyles = styled.div`
  padding: 1rem;

  table {
    color: ${colors.DARK_COLOR};
    background-color: #ffffff;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    thead {
      background-color: ${colors.SECONDARY_COLOR};
      font-family: 'Inter-SemiBold';
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.05em;

      tr {
        height: 45px;
      }

      th {
        max-width: 150px;
        width: 120px;
        color: ${colors.PRIMARY_COLOR};
        text-transform: uppercase;

        :nth-last-child(-n + 1) {
          width: 90px;
        }
      }
    }

    tbody {
      tr {
        height: 60px;
        border-top: 1px solid ${colors.BORDER_COLOR};
        font-size: 14px;

        :hover {
          background-color: ${colors.SECONDARY_COLOR};
        }

        :last-child:hover {
          border: 1px;
          border-top: 1px solid ${colors.BORDER_COLOR};

          td {
            :last-child {
              border-bottom-right-radius: 8px;
            }

            :first-child {
              border-bottom-left-radius: 8px;
            }
          }
        }
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    td {
      margin: 0;
      text-align: center;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
