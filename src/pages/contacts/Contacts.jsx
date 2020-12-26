import React, { useState } from 'react';
import axios from 'axios';
import formFields from './formFields';
import useForm from './useForm';

import Button from '../../components/shared/button/Button';
import InputForm from '../../components/shared/input_form/InputForm';
import Modal from '../../components/shared/modal/Modal';

import './Contacts.css';

const Contacts = () => {
  const [input, onChange, isValidInput, reset] = useForm(formFields);
  const [isLoading, setIsLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValidInput()) {
      setIsLoading(true);
      axios.post('/api/sendemail', {
        email: input.email.value,
        name: input.name.value,
        message: input.message.value,
      })
      .then((res) => {
        let message = '';
        if (res.status === 200) {
          message = "Email sent!";
          reset();
        } else {
          message = "Something went wrong";  
        }
        setIsLoading(false);
        setModalInfo({ show: true, message });
      })
      .catch((err) => {
        setModalInfo({ show: true, message: `Error: ${err}` });
      });
    } 
  };

  return (
    <div className="contacts_container">
      <Modal
        show={modalInfo.show}
        title="Send email"
        message={modalInfo.message}
        actions={[
          { 
            label: "Ok",
            callback: () => setModalInfo({ show: false, message: ''}),
          },  
        ]}
      >
        Hello World
      </Modal>
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
