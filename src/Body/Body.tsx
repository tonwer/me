import * as React from "react";

const hei = "Hello sev"

class Body extends React.Component<null, {}> {
  render() {
    return <AboutMeMain/>;
  }
}

class AboutMeMain extends React.Component<null, {}> {
  render() {
    return <MyPicture/>;
  }
}

class MyPicture extends React.Component<null, {}> {
  render() {
    return <div className="circle-div"/>;
  }
}




export default Body;