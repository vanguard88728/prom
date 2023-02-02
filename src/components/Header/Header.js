import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

import './Header.css';

const Header = () => {
  return (
    <div className="social-container">
      <FontAwesomeIcon icon={faTwitter} fixedWidth className="social-icon" />
      <FontAwesomeIcon icon={faFacebookF} fixedWidth className="social-icon" />
      <FontAwesomeIcon icon={faInstagram} fixedWidth className="social-icon" />
      <FontAwesomeIcon icon={faWhatsapp} fixedWidth className="social-icon" />
      <FontAwesomeIcon icon={faTelegramPlane} fixedWidth className="social-icon" />
    </div>
  )
}

export default Header;