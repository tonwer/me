import * as React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import "./Main.less";


interface HelloProps {
  name?: string;
}

class Main extends React.Component<null, {}> {
    render() {
    return <div>
                <Header />
                <Body/> 
                <Footer />
            </div>;
  }
}

export default Main;