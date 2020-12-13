import { useState } from 'react';

const useForm = (name = '', email = '', message = '') => {
  const [input, setInput] = useState({ name, email, message });

  const onChange = (e) => {
    setInput((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  };
  
  return [input, onChange];
};

export default useForm;