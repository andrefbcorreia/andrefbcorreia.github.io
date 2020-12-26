import React from 'react';
import { bool, string, arrayOf } from 'prop-types';

import Button from '../button/Button';

import './Modal.css';

const Modal = ({ show, title, message, actions }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal_container">
      <div className="modal_content">
        <h1>{title}</h1>
        { message && (
          <div>
            {message}
          </div>
        )}
        <div className="modal_actions">
          {actions.map((action, key) => {
            console.log("action", action);
            console.log("key", key);
            return <Button key={key} {...action} />
          })}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: bool,
  title: string,
  message: string,
  actions: [],
};

Modal.defaultProps = {
  show: false,
  title: null,
  message: null,
  actions: arrayOf()
};

export default Modal;
