import React from 'react';

import { RowDiv } from './Row.styles';

function Row({children, style}) {
  return (
    <RowDiv style={style}>{children}</RowDiv>
  );
}

export default Row;
