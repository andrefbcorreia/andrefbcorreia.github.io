import React from 'react';

import './ContactBox.css';

const ContactBox = ({ icon: Icon, description, name, onClick }) => (
  <div className="cb_container" onClick={onClick}>
    <div className="cb_icon">
      <Icon />
    </div>
    <p className="cb_description">{description}</p>
    <p className="cb_name">{name}</p>
  </div>
);

export default ContactBox;
