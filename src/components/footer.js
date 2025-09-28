import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row"></div>
          <div className="row no-gutter footer__flex">
            <div className="footer-logo-col">
              <img src="/logo_white.svg" alt="logo" className="logo-icon"></img>
              <h1 className="logo-text footer-logo">REINO</h1>
            </div>
            <div className="footer-routes col-lg-3">
            </div>
          </div>
          <div className="row tertiary no-gutter">
            <div className="col-lg-4">
              <ul className="privacy-links">
                <li>
                  <a href="#privacy">Privacy</a>
                </li>
                <li>
                  <a href="#terms-of-use">Terms of Use</a>
                </li>
                <li>
                  <a href="#notices">Notices</a>
                </li>
                <li>
                  <a href="#disclosures">Disclosures</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="address-text">
                <p>
                  Copyright © Reino Labs or one of its affiliates. All
                  rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
            <div className="social-links">
                <a href="https://www.twitter.com">
                  <TwitterIcon />
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com">
                  <InstagramIcon />
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com">
                  <FacebookRoundedIcon></FacebookRoundedIcon>
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
