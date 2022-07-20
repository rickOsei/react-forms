import React, { Component } from "react";

export default class ClassForm extends Component {
  constructor(props) {
    super();
    this.state = { people: [{ name: "", email: "" }] };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
    console.log(this.state.email);
    // console.log(e);
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      people: [
        ...this.state.people,
        { name: this.state.name, email: this.state.email },
      ],
      name: "",
      email: "",
    });
    e.target.value = "";
  };

  render() {
    return (
      <>
        <form>
          <input
            name="name"
            type="text"
            placeholder="Enter name..."
            value={this.state.people.name}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter email.."
            value={this.state.people.email}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        <div>
          {this.state.people.map((person, index) => {
            return (
              <div key={index}>
                <h1>name:{person.name}</h1>
                <h1>email:{person.email}</h1>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
