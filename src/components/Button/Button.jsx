import React from 'react';

import { ButtonElement } from './Button.styles';

function Button({blue, submit, onClick, style, children}) {

  return (
    <ButtonElement style={style} blue={blue} type={submit && "submit"} onClick={onClick}>{children}</ButtonElement>
  );
}

export default Button;
