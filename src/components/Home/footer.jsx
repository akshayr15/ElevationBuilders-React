import react, { Component, useEffect, useState } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="theme-footer-section">
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copy-right-info">
                  <p>
                    &copy; 2021 <span>AM Creative softwares</span>. All right
                    reserved by <a href="">AM Creative Softwares</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-main-menu">
                  <ul className="footer-menu">
                    <li>
                      <a href="#">home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">causes</a>
                    </li>
                    <li>
                      <a href="#">event</a>
                    </li>
                    <li>
                      <a href="#">gallery</a>
                    </li>
                    <li>
                      <a href="#">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
