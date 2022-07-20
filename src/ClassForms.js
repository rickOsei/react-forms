import React from "react";

class ClassForms extends React.Component {
  constructor(props) {
    super();
    this.state = { students: [{ name: "", email: "", password: "" }] };
  }

  // handleNameChange = (e) => {
  //   e.preventDefault();
  //   this.setState({ name: e.target.value });
  //   console.log(this.state.name);
  // };

  // handleEmailChange = (e) => {
  //   e.preventDefault();
  //   this.setState({ email: e.target.value });
  //   console.log(this.state.email);
  // };

  // handlePasswordChange = (e) => {
  //   e.preventDefault();
  //   this.setState({ password: e.target.value });
  //   console.log(this.state.password);
  // };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      students: [
        ...this.state.students,
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        },
      ],
      name: "",
      email: "",
      password: "",
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
            value={this.state.students.name}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter email.."
            value={this.state.students.email}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter password..."
            value={this.state.students.password}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        {this.state.students.map((element, index) => {
          return (
            <div key={index}>
              <h1>name:{element.name}</h1>
              <h1>email:{element.email}</h1>
              <h1>password:{element.password}</h1>
            </div>
          );
        })}
      </>
    );
  }
}

export default ClassForms;
