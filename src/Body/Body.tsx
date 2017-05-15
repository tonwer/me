import * as React from "react";
import * as ReactD3 from "react-d3-components";
import * as D3 from "d3";
import "./Body.less";

var PieCharts = ReactD3.PieChart;

var data = {
        label: 'Capabilities',
        values: [{x: 'Web Development', y: 1}, {x: 'SomethingB', y: 2}, {x: 'SomethingC', y: 3}]
};
var colorScale = D3.scale.ordinal().domain(['Web Development', ' SomethingB', 'SomethingC']).range(['#282F49', '#4D386C', '#018670']);

var sort = null;


class Body extends React.Component<null, {}> {
  render() {
    return <div className="bodyMe doubleContent spacebetween">
              <div className="column">
                <AboutMeMain/>
                <Experience/>
                <Education/>
              </div>
              <div className="column">
                <Skills/>
                <Software/>
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
    return <div className="aboutme doubleContent">
              <div>
                <img className="image" src='https://cdn2.iconfinder.com/data/icons/person-gender-hairstyle-clothes-variations/48/Female-Side-comb-O-neck-512.png' />
              </div>
              <div>
                <ul className="nomark_list">
                  <li>Cooperation and communication skills</li>
                  <li>Creative and solutionoriented</li>
                  <li>Quick learned, adjustable</li>
                  <li>Responsible, flexible and positive</li>
                </ul>
              </div>
           </div>;
  }
}

class Skills extends React.Component<null, {}> {
  render() {
    return <div className="skills">   
             <BodyHeader text="Skills"/>
             <PieChart />
            </div>;
  }
}

class PieChart extends React.Component<null, {}> {
  render() {
    return <div className="pie">
              <PieCharts
                data={data}
                width={600}
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
                <p>JavaScript</p>
                <p>Git</p>
                <p>C#</p>
                <p>Python</p>
                <p>React.js</p>
                <p>Azure</p>
                <p>Java</p>
                <p>HTML/CSS</p>
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
                <div className="bar" id="sf10"></div>
              </div>
            </div>;
  }
}


class Experience extends React.Component<null, {}> {
  render() {
    return <div className="experience">
               <BodyHeader text="Experience"/>
               <table>
                 <tbody>
                   <td className="tableHead">
                     <tr>
                         <span className="title titleblue">Netlight AS</span>
                         <span className="undertitle">02.2014 - Present</span>
                      </tr>
                     <tr>
                       <span className="title titleblue">EDR & Medeso</span>
                        <span className="undertitle">06.2014 - 01.2015</span>
                        
                     </tr>
                   </td>
                  <td>
                     <tr>
                        <span className="title titlepurple">Fullstack web developer</span>
                        <span>
                          consultant
                        </span>
                     </tr>
                     <tr>
                        <span className="title titlepurple">Summer inten and part-time</span>
                        <span>
                          Development of complex extensions to simulationsoftware used to assess design of large consutructions. 
                          Full time summer internshop and part-time while working on masterdegree.
                        </span> 
                     </tr>
                   </td>
                  </tbody>
               </table>
            </div>;
  }
}

class Education extends React.Component<null, {}> {
  render() {
    return <div className="education">
              <BodyHeader text="Education"/>
              <table>
                 <tbody>
                   <td className="tableHead">
                     <tr>
                         <span className="title titleblue">NTNU</span>
                         <span className="undertitle">08.2009 - 12.2014</span>
                      </tr>
                     <tr>
                       <span className="title titleblue">UCSB</span>
                        <span className="undertitle">08.2012 - 06.2013</span>
                        
                     </tr>
                   </td>
                  <td>
                     <tr>
                        <span className="title titlepurple">Master in Engineering and ICT, specialization in product development</span>
                        <span>
                          consultant
                        </span>
                     </tr>
                     <tr>
                        <span className="title titlepurple">Exchange year</span>
                        <span>
                          Development of complex extensions to simulationsoftware used to assess design of large consutructions. 
                          Full time summer internshop and part-time while working on masterdegree.
                        </span> 
                     </tr>
                   </td>
                  </tbody>
               </table>
            </div>;
  }
}

interface BodyHeaderProps {
  text: string;
}

class BodyHeader extends React.Component<BodyHeaderProps, {}> {
  render() {
    return <div className="bodyHeader">
              { this.props.text }
            </div>;
  }
}



export default Body;