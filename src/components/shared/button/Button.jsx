import React from 'react';
import { string, func, bool } from 'prop-types';

import './Button.css';

const Button = ({
  type,
  label,
  callback,
  disabled,
}) => {
  return(
    <button type={type} className="btn" onClick={callback} disabled={disabled}>
      <span className="btn_label">
        {label}
      </span>
    </button>
  );
};

Button.propTypes = {
  type: string,
  label: string.isRequired,
  callback: func,
  disabled: bool,
};

Button.defaultProps = {
  type: null,
  callback: null,
  disabled: false,
};

export default Button;
