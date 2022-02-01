import React from 'react';

import { InputElement } from './Input.styles';

function Input({label, name, type, required, noLabel, placeholder, theme, defaultValue, onChange}) {

  return (
    <>
      {!noLabel && <label htmlFor={label.toLowerCase()} style={{color: "rgb(var(--indigo-blue))"}}>{label}</label>}
      <InputElement defaultValue={defaultValue ? defaultValue : undefined}
                    name={name.toLowerCase()}
                    onChange={onChange}
                    placeholder={placeholder ? placeholder : null} 
                    required={required ? true : false}
                    theme={theme} 
                    type={type} />
    </>
  );
}

export default Input;
