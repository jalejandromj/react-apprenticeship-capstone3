import React from 'react';

import { ColDiv } from './Col.styles';

function Col({children, style, md, lg, xl}) {
  return (
    <ColDiv md={md} lg={lg} xl={xl} style={style}>{children}</ColDiv>
  );
}

export default Col;
