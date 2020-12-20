import React from 'react';
import {
  string,
  oneOf,
} from 'prop-types';

import Input from './input/Input';
import TextArea from './text_area/TextArea';

import './InputForm.css';

const InputForm = ({
  object,
  input_type,
  ...rest
}) => {
  const renderErrors = () => {
    if (object.errors && object.errors.length > 0) {
      return object.errors.map((error, key) => (
        <p key={key} className="error_label">- {error}</p>
      ));
    }

    return null;
  }

  const renderInputType = () => {
    switch(input_type) {
      case 'input': 
        return <Input value={object.value} {...rest} />
      case 'textarea':
        return <TextArea value={object.value} {...rest} />
      default:
        return null;
    }
  }

  return (
    <div>
      {renderInputType()}
      {renderErrors()}
    </div>
  );
};

InputForm.propTypes = {
  error: string,
  input_type: oneOf(['input', 'textarea']),
};

export default InputForm;
