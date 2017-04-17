import * as React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

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