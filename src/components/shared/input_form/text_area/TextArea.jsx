import React from 'react';
import { string, func } from 'prop-types';

import './TextArea.css';

const TextArea = (props) => (<textarea {...props} />);

TextArea.propTypes = {
  rows: string,
  cols: string,
  name: string.isRequired,
  value: string,
  onChange: func.isRequired,
  placeholder: string,
};

TextArea.defaultProps = {
  rows: "4",
  cols: "50",
  value: '',
  placeholder: null,
};

export default TextArea;