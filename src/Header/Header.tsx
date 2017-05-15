import * as React from "react";
import "./Header.less";


class Header extends React.Component<null, {}> {
  render() {
    return <div className="header">
              <div className="header-wrapper">          
                <ul className="flex-container">
                  <li className="flex-item">Tone Wermundsen</li>
                  <li className="flex-item">Fullstack Web Developer</li>
                  <div className="horisontal">
                    <ul className="flex-container">
                      <li className="flex-item">Phone</li>
                      <li className="flex-item">Email</li>
                    </ul>
                  </div>
                  <div className="horisontal">
                  <ul className="flex-container">
                    <li className="flex-item">984 71 094</li>
                    <li className="flex-item">tonewermundsen-at-gmail.com</li>
                  </ul>
                  </div>
                </ul>
              </div>
            </div>;
  }
}
export default Header;