import React from 'react';
import Button from '../../components/shared/button/Button';
import Input from '../../components/shared/input/Input';
import TextArea from '../../components/shared/text_area/TextArea';

import useForm from './useForm';

import './Contacts.css';

const Contacts = () => {
  const [input, onChange] = useForm();

  console.log(input);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handle Form submit");
    console.log(input);
  };

  return (
    <div className="contacts_container">
      <div>
        <h1>Lets talk</h1>
        <form onSubmit={handleFormSubmit}>
          <Input
            name="name"
            value={input.name}
            onChange={onChange}
            placeholder="Name"
          />
          <Input
            name="email"
            type="email"
            value={input.email}
            onChange={onChange}
            placeholder="Email"
          />
          <TextArea 
            name="name"
            value={input.message}
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
