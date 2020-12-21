import { useState } from 'react';

const validateEmail = (value) => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value));

const toObject = (array) => {
  let rv = {};

  for(let i = 0; i < array.length; i++) {
    const id = array[i].id;
    rv[id] = {
      value: '',
      validations: array[i].validations,
      errors: [],
    }
  }

  return rv;
}

const useForm = (state) => { 
  const object = toObject(state);
  const [input, setInput] = useState(object)

  const onChange = (e) => {
    setInput((state) => ({
      ...state,
      [e.target.name]: {
        ...state[e.target.name],
        value: e.target.value,
      },
    }))
  };

  const checkValidation = (key, validationId, validationValue = 0) => {
    const currentValue = input[key].value;
    switch(validationId) {
      case 'required':
        return currentValue.length === 0;
      case 'emailFormat':
        return !validateEmail(currentValue);
        case 'minLength':
          return currentValue.length < validationValue;
      default:
      return false;
    }
  }

  const isValidInput = () => {
    let newInputState = {};
    let isValid = true;

    for (const [key, value] of Object.entries(input)) {
      let searchErrors = [];
      value.validations.forEach((validation) => {
        const hasError = checkValidation(key, validation.id, validation.value);
        if (hasError) {
          searchErrors.push(validation.message);
        }
      });

      if(searchErrors.length > 0) {
        isValid = false;
      };

      newInputState[key] = {
        ...value,
        errors: searchErrors,
      };
    }
    
    setInput(newInputState);
    return isValid;
  }

  const reset = () => setInput(object);

  return [
    input,
    onChange,
    isValidInput,
    reset,
  ];
};

export default useForm;