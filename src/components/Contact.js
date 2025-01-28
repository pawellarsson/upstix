import React, { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, [])

	return (
    <footer className="contact">
      <div className="contact-items-container flex-container">
        <a
          className="contact-item"
          href="https://www.linkedin.com/in/pawel-larsson/"
          target="_blank"
          rel="noreferrer" 
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className="contact-item"
          href="https://github.com/pawellarsson/upstix"
          target="_blank"
          rel="noreferrer" 
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
      </div>
      <p className="footer">
        Copyright &copy; {date}
      </p>
    </footer>
	);
};

export default Contact;
