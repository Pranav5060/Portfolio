import React, { Component, Fragment } from "react";
import "./skillstyle.css";
import SkillBar from "react-skillbars";
import { blue } from "@mui/material/colors";
class SkillsData extends Component {
  render() {
    const colors= {
      bar: "#FFFFFF",
      title: {
        text: "#fff",
        background: "inherit"
      }
    }
       const skills= [
        {
          type: "C++",
          level: 60,
          range: 2
        },
        {
          type: "HTML/CSS",
          level: 60,
          range: 2
        },
        {
          type: "Javascript",
          level: 60,
          range: 2
        },
        {
          type: "React",
          level: 50,
          range: 2
        },
        {
          type: "Python",
          level: 25,
          range: 1
        },
        {
          type: "MySQL",
          level: 30,
          range: 1
        },
        {
          type: "NodeJs",
          level: 25,
          range: 1
        },
        {
          type: "Git",
          level: 50,
          range: 2
        }
      ]
    return (
        
      <div className="SkillsData">
        <div className="printDivs">
          <Fragment>
            <p>Bonnes connaissances en : </p>
            {skills.map((element, id) => {
              if (element.range === 2) {
                return (
                  <span>
                    {id === skills.length - 1
                      ? element.type + "."
                      : element.type + ", "}
                  </span>
                );
              }
              return null;
            })}
          </Fragment>
        </div>
        <div className="printDivs">
          <Fragment>
            <p>Connaissances basiques en : </p>
            {skills.map((element, id) => {
              if (element.range === 1) {
                return (
                  <span>
                    {id === skills.length - 2
                      ? element.type + "."
                      : element.type + ", "}
                  </span>
                );
              }
              return null;
            })}
          </Fragment>
        </div>

        <SkillBar
          className="skillBarMargin"
          collapsed={false}
          skills={skills}
          height={15}
          colors={colors}
        />
      </div>
    );
  }
}

export default SkillsData;