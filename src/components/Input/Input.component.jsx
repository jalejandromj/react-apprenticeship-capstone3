import React from 'react';

import { InputElement } from './Input.styles';

function Input({label, type, required}) {

  return (
    <>
      <label htmlFor={label.toLowerCase()} style={{color: "rgb(var(--indigo-blue))"}}>{label}</label>
      <InputElement name={label.toLowerCase()} type={type} required={required ? true : false}></InputElement>
    </>
  );
}

export default Input;
