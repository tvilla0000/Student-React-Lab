import React, { Component } from "react";

class Student extends Component {
  render() {
    const dates = this.props.scores.map((s, idx) => (
      <li key={idx}>Date: {s.date}</li>
    ));
    const scores = this.props.scores.map((s, idx) => (
      <li key={idx}>Score: {s.score}</li>
    ));
    console.log(this.props);
    console.log(this.props.scores);
    return (
      <div className="container">
        <div className="Student">
          <h1>Hello! My Name is {this.props.name}</h1>
          <p>{this.props.bio}</p>
          <div className="idk">
            <ul>{dates}</ul>
            <ul>{scores}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
