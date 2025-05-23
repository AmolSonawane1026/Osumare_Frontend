import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo/logo.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const Footer = () => {
  return (
    <footer className="footer_main">
      <div className="footer_sub">
        <div className="footer_left">
          <div className="footer_logo">
            

             <LazyLoadImage
                          src={Logo} alt="Logo"
                            effect="blur"
                          />
          </div>
          <p>
            Subscribe to our newsletter for the latest features and updates
            delivered to you.
          </p>
          <div className="footer_newsletter">
            <input type="email" placeholder="Your email here" />
            <button>Join</button>
          </div>
          <small>
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </small>
        </div>

        <div className="footer_right">
          <div className="footer_links">
            <div className="footer_links_section">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home Page</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Blog Posts</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="footer_links_section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">User Guide</a>
                </li>
                <li>
                  <a href="#">Community Forum</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            <div className="footer_links_section">
              <h4>Connect With Us</h4>
              <ul className="footer_social_links">
                <li>
                  <a href="#">
                    <i className="social-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2917 8.3077C16.2917 3.79297 12.6541 0.133057 8.16675 0.133057C3.67943 0.133057 0.041748 3.79297 0.041748 8.3077C0.041748 12.3878 3.01293 15.7698 6.89722 16.3831V10.6707H4.83423V8.3077H6.89722V6.50673C6.89722 4.45796 8.11028 3.32628 9.96611 3.32628C10.8551 3.32628 11.7849 3.48594 11.7849 3.48594V5.49768H10.7604C9.75112 5.49768 9.43628 6.12786 9.43628 6.77435V8.3077H11.6897L11.3295 10.6707H9.43628V16.3831C13.3206 15.7698 16.2917 12.388 16.2917 8.3077Z"
                          fill="#FF3E54"
                        />
                      </svg>
                      Facebook
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="social-icon"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4167 3.44556H6.91675C4.67309 3.44556 2.85425 5.2644 2.85425 7.50806V14.0081C2.85425 16.2517 4.67309 18.0706 6.91675 18.0706H13.4167C15.6604 18.0706 17.4792 16.2517 17.4792 14.0081V7.50806C17.4792 5.2644 15.6604 3.44556 13.4167 3.44556ZM16.0574 14.0081C16.0529 15.4645 14.8732 16.6442 13.4167 16.6487H6.91675C5.46022 16.6442 4.28058 15.4645 4.27612 14.0081V7.50806C4.28058 6.05153 5.46022 4.87189 6.91675 4.86743H13.4167C14.8732 4.87189 16.0529 6.05153 16.0574 7.50806V14.0081ZM14.0261 7.71118C14.4749 7.71118 14.8386 7.34741 14.8386 6.89868C14.8386 6.44995 14.4749 6.08618 14.0261 6.08618C13.5774 6.08618 13.2136 6.44995 13.2136 6.89868C13.2136 7.34741 13.5774 7.71118 14.0261 7.71118ZM10.1667 7.10181C8.14746 7.10181 6.5105 8.73877 6.5105 10.7581C6.5105 12.7774 8.14746 14.4143 10.1667 14.4143C12.1861 14.4143 13.823 12.7774 13.823 10.7581C13.8252 9.78769 13.4406 8.85646 12.7545 8.17031C12.0683 7.48416 11.1371 7.09965 10.1667 7.10181ZM7.93237 10.7581C7.93237 11.9921 8.93272 12.9924 10.1667 12.9924C11.4008 12.9924 12.4011 11.9921 12.4011 10.7581C12.4011 9.52403 11.4008 8.52368 10.1667 8.52368C8.93272 8.52368 7.93237 9.52403 7.93237 10.7581Z" fill="#FF3E54"/>
</svg>
 Instagram</i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="social-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3723 3.75806H16.6149L11.7155 9.26469L17.4792 16.7581H12.9663L9.43152 12.2134L5.387 16.7581H3.14304L8.38345 10.8681L2.85425 3.75806H7.4818L10.6769 7.91206L14.3723 3.75806ZM13.5852 15.4381H14.8279L6.80658 5.00872H5.4731L13.5852 15.4381Z" fill="#FF3E54"/>
</svg>
 X</i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="social-icon"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.073 3.44556C3.3999 3.44556 2.85425 3.99121 2.85425 4.66431V16.8518C2.85425 17.5249 3.3999 18.0706 4.073 18.0706H16.2605C16.9336 18.0706 17.4792 17.5249 17.4792 16.8518V4.66431C17.4792 3.99121 16.9336 3.44556 16.2605 3.44556H4.073ZM7.33987 6.69777C7.34444 7.47472 6.76287 7.95346 6.07275 7.95003C5.42262 7.9466 4.8559 7.42902 4.85933 6.69891C4.86276 6.01222 5.40548 5.46035 6.11046 5.47635C6.82571 5.49235 7.34444 6.01679 7.33987 6.69777ZM10.394 8.93949H8.34651H8.34537V15.8944H10.5094V15.7321C10.5094 15.4234 10.5091 15.1147 10.5089 14.8059C10.5082 13.9821 10.5075 13.1575 10.5117 12.3341C10.5129 12.1341 10.522 11.9262 10.5734 11.7353C10.7665 11.0224 11.4075 10.5619 12.1228 10.6751C12.5821 10.747 12.8859 11.0133 13.0139 11.4463C13.0928 11.7171 13.1282 12.0084 13.1316 12.2907C13.1409 13.1419 13.1396 13.993 13.1383 14.8443C13.1378 15.1447 13.1373 15.4454 13.1373 15.7458V15.8932H15.3082V15.7264C15.3082 15.3592 15.3081 14.992 15.3078 14.6248C15.3074 13.7071 15.3069 12.7894 15.3094 11.8713C15.3105 11.4566 15.266 11.0476 15.1643 10.6465C15.0123 10.05 14.6981 9.55645 14.1874 9.20001C13.8252 8.94634 13.4276 8.78295 12.9831 8.76467C12.9325 8.76257 12.8815 8.75981 12.8302 8.75704C12.6029 8.74476 12.372 8.73228 12.1547 8.77609C11.5331 8.90063 10.987 9.18514 10.5745 9.68669C10.5266 9.74422 10.4797 9.80264 10.4098 9.88982L10.394 9.90956V8.93949ZM5.03308 15.8966H7.18684V8.94401H5.03308V15.8966Z" fill="#FF3E54"/>
</svg>
 LinkedIn</i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="social-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9612 6.16323C17.8687 5.81987 17.6878 5.50674 17.4366 5.255C17.1855 5.00325 16.8727 4.82168 16.5296 4.72836C15.2572 4.37898 10.1669 4.3733 10.1669 4.3733C10.1669 4.3733 5.07739 4.36761 3.80421 4.70155C3.46127 4.79917 3.14919 4.9833 2.89792 5.23628C2.64665 5.48926 2.46463 5.80258 2.36933 6.14617C2.03377 7.41855 2.03052 10.0575 2.03052 10.0575C2.03052 10.0575 2.02727 12.7095 2.36039 13.9689C2.54727 14.6652 3.09571 15.2153 3.79283 15.403C5.07821 15.7524 10.1547 15.758 10.1547 15.758C10.1547 15.758 15.245 15.7637 16.5174 15.4306C16.8607 15.3374 17.1737 15.1563 17.4255 14.9051C17.6773 14.6538 17.8591 14.3412 17.9531 13.9982C18.2895 12.7266 18.2919 10.0884 18.2919 10.0884C18.2919 10.0884 18.3081 7.43561 17.9612 6.16323ZM8.53864 12.5024L8.54271 7.62736L12.7734 10.0689L8.53864 12.5024Z" fill="#FF3E54"/>
</svg>
 YouTube</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_bottom_content">
          <p>© 2024 Ourname. All rights reserved.</p>
          <div className="footer_bottom_links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
