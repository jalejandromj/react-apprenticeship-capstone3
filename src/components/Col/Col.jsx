import React from 'react';

import { ColDiv } from './Col.styles';

function Col({className, children, style, md, lg, xl, alignX}) {
  console.log(className);
  return (
    <ColDiv className={className} md={md} lg={lg} xl={xl} style={style} alignX={alignX}>{children}</ColDiv>
  );
}

export default Col;
