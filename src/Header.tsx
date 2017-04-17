import * as React from "react";
import "./Header.less";

class Header extends React.Component<null, {}> {
  render() {
    return <div className="header-wrapper">          
                <ul className="flex-container">
                    <li className="flex-item">1</li>
                    <li className="flex-item">2</li>
                    <li className="flex-item">3</li>
                </ul>
            </div>;
  }
}
export default Header;