import React from 'react';
import { string, func } from 'prop-types';

import './TextArea.css';

const TextArea = ({
  rows,
  cols,
  name,
  value,
  onChange,
  placeholder,
  errorMessage,
}) => (
  <div>
    <textarea 
      rows={rows}
      cols={cols}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
    {errorMessage && (
      <span>
        errorMessage
      </span>
    )}
  </div>
);

TextArea.propTypes = {
  rows: string,
  cols: string,
  name: string.isRequired,
  value: string,
  onChange: func.isRequired,
  placeholder: string,
  errorMessage: string,
};

TextArea.defaultProps = {
  rows: "4",
  cols: "50",
  value: '',
  placeholder: null,
  errorMessage: null,
};

export default TextArea;