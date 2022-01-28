import styled from 'styled-components';

import { MEDIA_QUERIES } from '../../utils/constants';

const ColDiv = styled.div`
  display: flex;
  ${props => props.centerX && "align-items: center;"}
  flex-flow: column;
  flex-basis: 100%;
  flex: 1 0 100%;
  padding: 10px 10px;

  /* HD STYLES MD */
  @media screen and (min-width: ${MEDIA_QUERIES.md}) and (max-width: calc(${MEDIA_QUERIES.lg} - 1px)) {
    flex: 0 0 ${props => Math.floor((props.md/12)*100)}%;
  }

  /* START 1366x768 (MOST COMMON) size LG */
  @media screen and (min-width: ${MEDIA_QUERIES.lg}) and (max-width: calc(${MEDIA_QUERIES.xl} - 1px)) {
    flex: 0 0 ${props => Math.floor((props.lg/12)*100)}%;
  }

  /* FULL HD STYLES XL */
  @media screen and (min-width: ${MEDIA_QUERIES.xl}) {
    flex: 0 0 ${props => Math.floor((props.xl/12)*100)}%;
  }
`;

export { ColDiv };