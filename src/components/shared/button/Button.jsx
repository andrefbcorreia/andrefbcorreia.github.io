import React from 'react';
import { string, func } from 'prop-types';

import './Button.css';

const Button = ({
  type,
  label,
  callback,
}) => {
  return(
    <button type={type} className="btn" onClick={callback}>
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
};

Button.defaultProps = {
  type: null,
  callback: null
};

export default Button;
