import React, { useState } from 'react';
import axios from 'axios';
import formFields from './formFields';
import useForm from './useForm';

import Button from '../../components/shared/button/Button';
import InputForm from '../../components/shared/input_form/InputForm';

import './Contacts.css';

const Contacts = () => {
  const [input, onChange, isValidInput, reset] = useForm(formFields);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValidInput()) {
      setIsLoading(true);
      axios.post('/api/sendemail', {
        email: input.email.value,
        name: input.name.value,
        message: input.message.value,
      })
      .then(res => {
        setIsLoading(false);
      })
      .catch(err => {
        console.log("Error log:", err);
        setIsLoading(false);
      });
    } 
  };

  return (
    <div className="contacts_container">
      <div>
        <h1 className="contacts_title">Lets talk</h1>
        <form onSubmit={handleFormSubmit}>
          <InputForm 
            object={input.name}
            name="name"
            input_type="input"
            onChange={onChange}
            placeholder="Name"
            />
          <InputForm
            object={input.email}
            name="email"
            input_type="input"
            value={input.email.value}
            onChange={onChange}
            placeholder="Email"
            />
          <InputForm
            object={input.message}
            name="message"
            input_type="textarea"
            onChange={onChange}
            placeholder="Enter your message ..."
            />
          <Button 
            type="submit"
            label={isLoading ? "Loading ... " : "Submit" }
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
}

export default Contacts;
