import React from 'react';

import './Card.css';

const Card = ({ title, company, date }) => (
  <div className="card_container">
    <span className="card_title">{title}</span>
    <span className="card_company">{company}</span>
    <span className="card_date">{date}</span>
  </div>
);

export default Card;