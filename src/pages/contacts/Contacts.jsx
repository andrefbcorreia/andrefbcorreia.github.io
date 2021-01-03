import React from 'react';
import ContactBox from '../../components/shared/contact_box/ContactBox';
import { ReactComponent as GithubIcon } from '../../assets/svgs/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svgs/linkedin.svg';
import { ReactComponent as GmailIcon } from '../../assets/svgs/gmail.svg';

import './Contacts.css';

const Contacts = () => (
  <div className="contacts_container">
    <div>
      <h1 className="contacts_title">Reach me out</h1>
      <h3 className="contacts_subtitle">Drop me a message and I'll get back to you</h3>
      <div className="contact_box_row">
        <ContactBox
          icon={GmailIcon}
          description="Send me an email"
          name="andrefbcorreia@gmail.com"
          onClick={() => alert("click")}
          />
        <ContactBox
          icon={LinkedinIcon}
          description="Send me a message"
          name="linkedin.com/in/andrefbcorreia"
          hasRightArrow
          onClick={() => alert("click")}
          />
        <ContactBox
          icon={GithubIcon}
          description="See my repository"
          name="github.com/andrefbcorreia"
          hasRightArrow
          onClick={() => alert("click")}
        />
      </div>
    </div>
  </div>
);

export default Contacts;
