import React from 'react';

import { ColDiv } from './Col.styles';

function Col({children, style, md, lg, xl, alignX}) {
  return (
    <ColDiv md={md} lg={lg} xl={xl} style={style} alignX={alignX}>{children}</ColDiv>
  );
}

export default Col;
