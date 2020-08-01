import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>

            {education.description.split("\n").map((line) => (
              <p key={Math.random()}>{line}</p>
            ))}
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>

            {work.description.split("\n").map((line) => (
              <p key={Math.random()}>{line}</p>
            ))}
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skill) {
        var className = "bar-expand " + skill.name.toLowerCase();
        return (
          <li key={skill.name}>
            {/* <span style={{ width: skill.level }} className={className}></span> */}

            <em style={{ color: "black", textAlign: "center" }}>
              &#9679; {skill.name}
            </em>
          </li>
          // <li>
          //   <div
          //     key={skill.name}
          //     style={{
          //       backgroundColor: "rgba(120, 116, 116,0.8)",
          //       borderRadius: 10,
          //       margin: 0,
          //     }}
          //   >
          //     <p
          //       style={{
          //         color: "white",
          //         textAlign: "center",
          //         textDecoration: "bold",
          //       }}
          //     >
          //       {skill.name.toUpperCase()}
          //     </p>
          //   </div>
          // </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>
            {/* {skills.map(skill)} */}
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
