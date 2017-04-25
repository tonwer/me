import * as React from "react";
import "./Header.less";


class Header extends React.Component<null, {}> {
  render() {
    return <div className="header">
              <div className="header-title">
                  <div className="name">
                     Tone Wermundsen
                  </div>
                  <div className="jobtitle">
                     Web developer
                  </div>
                </div>
              <div className="header-wrapper">          
                <ul className="flex-container">
                    <li className="flex-item">My Contactinformation 1</li>
                    <li className="flex-item">My Contactinformation 2</li>
                    <li className="flex-item">My Contactinformation 3</li>
                </ul>
              </div>
            </div>;
  }
}
export default Header;