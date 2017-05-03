import * as React from "react";
import "./Header.less";

type Color = 'red' | 'green' | 'blue'

type HeaderState = {
  isVisible: boolean
  color: Color
}

class Header extends React.Component<null, HeaderState> {
  
  constructor() {
    super();
    this.state = {
      isVisible: true,
      color: 'red'
    }  
  }

  toggle = () => {
    this.setState({ isVisible: !this.state.isVisible,   color: 'blue' })
  }
  
  render() {
    return <div className="header-wrapper">          
                <ul className="flex-container">
                    <li className="flex-item">1</li>
                    <li className="flex-item">2</li>
                    <li onClick={this.toggle} style={ { color: this.state.color } }  className="flex-item">3</li>
                </ul>
            </div>;
  }
}
export default Header;