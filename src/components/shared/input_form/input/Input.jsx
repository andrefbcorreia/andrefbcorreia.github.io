import React from 'react';
import { string, func } from 'prop-types';

import './Input.css';

const Input = (props) => (<input {...props} />)

Input.propTypes = {
  name: string.isRequired,
  type: string,
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
};

Input.defaultProps = {
  type: "text",
  placeholder: null,
};

export default Input;
