import React from 'react';
import Button from '../../components/shared/button/Button';
import InputForm from '../../components/shared/input_form/InputForm';

import formFields from './formFields';
import useForm from './useForm';

import './Contacts.css';

const Contacts = () => {
  const [input, onChange, isValidInput] = useForm(formFields);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValidInput()) {
      // TODO: Send email
      alert("Is valid: make request");
    } 
    console.log(input)
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
            label="Submit"
          />
        </form>  
      </div>
    </div>
  );
}

export default Contacts;
