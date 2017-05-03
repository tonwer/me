import * as React from "react";
import * as ReactD3 from "react-d3-components";
import * as D3 from "d3";
import "./Body.less";

var PieCharts = ReactD3.PieChart;

var data = {
        label: 'somethingA',
        values: [{x: 'SomethingA', y: 1}, {x: 'SomethingB', y: 2}, {x: 'SomethingC', y: 3}]
};
var colorScale = D3.scale.ordinal().domain(['SomethingA', 'SomethingB', 'SomethingC']).range(['#282F49', '#4D386C', '#018670']);

var sort = null;


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
             {/*<img src='http://icon-icons.com/icons2/632/PNG/512/pie-chart-1_icon-icons.com_58005.png' />*/}
             <PieChart />
            </div>;
  }
}

class PieChart extends React.Component<null, {}> {
  render() {
    return <div className="pie">
              <PieCharts
                data={data}
                width={450}
                height={300}
                margin={{top: 10, bottom: 10, left: 1, right: 1}}
                sort={sort}
                colorScale={colorScale}
                />
            </div>;
  }
}

class Software extends React.Component<null, {}> {
  render() {
    return <div className="software">
              <BodyHeader text="Software"/>
              {/*<img src='https://www.upeace.org/uploads/image/3A%20Upeace-Pie-Chart-Feb-2016-No-Background.png' />*/}
              <MyBarChart />
            </div>;
  }
}

class MyBarChart extends React.Component<null, {}> {
  render() {
    return <div className="barChart">
              <div className="formRow left">
                <p>Angular</p>
                <p>ASP.NET</p>
                <p>sf3</p>
                <p>sf4</p>
                <p>sf5</p>
                <p>sf6</p>
                <p>sf7</p>
                <p>sf8</p>
                <p>sf9</p>
              </div>
              <div className="formRow right">
                <div className="bar" id="sf1"></div>
                <div className="bar" id="sf2"></div>
                <div className="bar" id="sf3"></div>
                <div className="bar" id="sf4"></div>
                <div className="bar" id="sf5"></div>
                <div className="bar" id="sf6"></div>
                <div className="bar" id="sf7"></div>
                <div className="bar" id="sf8"></div>
                <div className="bar" id="sf9"></div>
              </div>
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