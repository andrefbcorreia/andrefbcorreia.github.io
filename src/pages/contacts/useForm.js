import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const useForm = (state = initialState) => {
  const [input, setInput] = useState(state);

  const onChange = (e) => {
    setInput((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  };
  
  return [input, onChange];
};

export default useForm;