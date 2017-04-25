import * as React from "react";
import "./Body.less";

const hei = "Hello sev"

class Body extends React.Component<null, {}> {
  render() {
    return <div className="bodyMe">
              <div className="floatRight leftBorder">
                <Skills/>
                <Software/>
              </div>
              <div className="floatLeft">
                <AboutMeMain/>
                <Experience/>
                <Education/>
              </div>

            </div>;
  }
}

class AboutMeMain extends React.Component<null, {}> {
  render() {
    return <div className="aboutme">
              <BodyHeader text="About me"/>
              <AboutMe/>
           </div>;
  }
}

class AboutMe extends React.Component<null, {}> {
  render() {
    return <div className="aboutme">
              <div className="floatLeft">
                <ul>
                  <li>image1</li>
                  <li>image2</li>
                </ul>
              </div>
              <div className="floatRight">
                <ul>
                  <li>text1</li>
                  <li>text2</li>
                </ul>
              </div>
           </div>;
  }
}

class Skills extends React.Component<null, {}> {
  render() {
    return <div className="skills">   
             <BodyHeader text="Skills"/>
             <img src='http://icon-icons.com/icons2/632/PNG/512/pie-chart-1_icon-icons.com_58005.png' />
            </div>;
  }
}

class Software extends React.Component<null, {}> {
  render() {
    return <div className="software">
              <BodyHeader text="Software"/>
              <img src='https://www.upeace.org/uploads/image/3A%20Upeace-Pie-Chart-Feb-2016-No-Background.png' />
            </div>;
  }
}


class Experience extends React.Component<null, {}> {
  render() {
    return <div className="experience">
               <BodyHeader text="Experience"/>
               <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus nisi, ornare at nunc et, facilisis elementum risus. Pellentesque ullamcorper dolor mattis odio luctus, et tincidunt orci condimentum. Sed sed vulputate enim. Aliquam blandit sed mi id eleifend. Curabitur suscipit, ex eget mollis congue, nisi leo pellentesque risus, ac pharetra ante magna nec risus. Nam sit amet cursus augue, at pellentesque dui. Aenean vitae congue velit. Aenean vehicula consequat lectus sit amet luctus. Etiam ac dui faucibus, suscipit lectus nec, placerat lacus. Cras ac eleifend arcu. Nam efficitur magna luctus dignissim hendrerit. Proin gravida diam id enim consectetur, eget finibus leo dapibus. Morbi quis diam et neque ornare tristique. Donec posuere sapien ac lectus ultricies, quis lobortis ligula porta. Sed id odio nec odio egestas feugiat ac ut metus. Nulla mollis leo ipsum, ut ornare magna pharetra eu.
              </span>
            </div>;
  }
}

class Education extends React.Component<null, {}> {
  render() {
    return <div className="education">
              <BodyHeader text="Education"/>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus nisi, ornare at nunc et, facilisis elementum risus. Pellentesque ullamcorper dolor mattis odio luctus, et tincidunt orci condimentum. Sed sed vulputate enim. Aliquam blandit sed mi id eleifend. Curabitur suscipit, ex eget mollis congue, nisi leo pellentesque risus, ac pharetra ante magna nec risus. Nam sit amet cursus augue, at pellentesque dui. Aenean vitae congue velit. Aenean vehicula consequat lectus sit amet luctus. Etiam ac dui faucibus, suscipit lectus nec, placerat lacus. Cras ac eleifend arcu. Nam efficitur magna luctus dignissim hendrerit. Proin gravida diam id enim consectetur, eget finibus leo dapibus. Morbi quis diam et neque ornare tristique. Donec posuere sapien ac lectus ultricies, quis lobortis ligula porta. Sed id odio nec odio egestas feugiat ac ut metus. Nulla mollis leo ipsum, ut ornare magna pharetra eu.
             </span>
            </div>;
  }
}

class BodyHeader extends React.Component<BodyHeaderProps, {}> {
  render() {
    return <div className="bodyHeader">
              { this.props.text }
            </div>;
  }
}

interface BodyHeaderProps {
  text: string;
}

export default Body;