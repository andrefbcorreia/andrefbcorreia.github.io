import React from 'react';
import { string, func } from 'prop-types';

import './Input.css';

const Input = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  errorMessage,
}) => {
  return (
    <div>
      <input name={name} type={type} onChange={onChange} value={value} placeholder={placeholder} />
      { errorMessage && (
        <span>errorMessage</span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: string.isRequired,
  type: string,
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  errorMessage: string,
};

Input.defaultProps = {
  type: "text",
  placeholder: null,
  errorMessage: null,
};

export default Input;
