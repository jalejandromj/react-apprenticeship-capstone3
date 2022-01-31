import React from 'react';

import { InputElement } from './Input.styles';

function Input({label, name, type, required, noLabel, placeholder, theme, onChange}) {

  return (
    <>
      {!noLabel && <label htmlFor={label.toLowerCase()} style={{color: "rgb(var(--indigo-blue))"}}>{label}</label>}
      <InputElement name={name.toLowerCase()} 
                    type={type} 
                    required={required ? true : false} 
                    placeholder={placeholder ? placeholder : null} 
                    theme={theme} 
                    onChange={onChange}/>
    </>
  );
}

export default Input;
