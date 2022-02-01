import React from 'react';

import { RowDiv } from './Row.styles';

function Row({style, children}) {
  return (
    <RowDiv style={style}>{children}</RowDiv>
  );
}

export default Row;
