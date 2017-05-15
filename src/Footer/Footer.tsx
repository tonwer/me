import * as React from "react";
import "./Footer.less";


class Footer extends React.Component<null, {}> {
  render() {
    return <ContactForMore/>;
  }
}

class ContactForMore extends React.Component<null, {}> {
  render() {
    return <div className="footer">
              <div className="footer-wrapper">   
                <a href="https://no.linkedin.com/in/tone-wermundsen-7a0a9a5b"><i className="fa fa-linkedin-square fa-6"></i></a>
              </div>
            </div>;
  }
}





export default Footer;