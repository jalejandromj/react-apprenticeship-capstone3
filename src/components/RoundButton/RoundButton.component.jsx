import React from 'react';

import { ButtonElement } from './RoundButton.styles';

function RoundButton({children, style, blue, submit, onClick}) {

  return (
    <ButtonElement style={style} blue={blue} type={submit && "submit"} onClick={onClick}>{children}</ButtonElement>
  );
}

export default RoundButton;