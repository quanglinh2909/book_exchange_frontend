
import React from "react";
import facebookIcon from "@/images/social/facebook.png";
// import './footer.scss'

export default function FooterDesktop() {
  return (
    <div id="footer-wrap">
    <footer className="footer">
      <div className="top-footer">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <a href="/" title="Mercury">
                <img
                  src="https://i.imgur.com/bAnFKDw.png"
                  width="72"
                  alt="Mercury-Logo"
                  className="img-fluid"
                />
                Smartlight.
              </a>
              <p className="tagline">A product of Smartlight.</p>
            </div>
          </div>
          <div className="col-md-2">
            <h4>Lien</h4>
            <ul className="footer-link">
              <li>
                <a href="#" title="Home">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>À Propos</h4>
            <ul className="footer-link">
              <li>
                <a href="#" title="Faq">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" title="Blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Nous Contacter</h4>
            <ul className="footer-link">
              <li>
                <a href="mail-to:smartlight.eip@gmail.com" title="Contact">
                  smartlight.eip@gmail.com
                </a>
              </li>
              <li>
                <div className="icons">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="row">
          <div className="col-md-5">
            <p className="copyright pt-3">
              Copyright &copy; 2020 Smartlight
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}
