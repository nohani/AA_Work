import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }

  update(field) {
    return (e) => this.setState({[field] : e.currentTarget.value})
  }

  render () {
    const link = this.props.formType === 'login' ? (
      <Link to="/signup"> Sign Up Here</Link>
    ) : ( 
      <Link to="/login"> Login Here </Link>
    )

    return (
      <div>
        <p>{this.props.errors}</p>
        <h1> {this.props.formType} </h1>
        <form>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.update("username")} />
        </label>
        <label>Password:
          <input type="password" value={this.state.password} onChange={this.update("password")} />
        </label>
        <input type="submit" value="submit" onClick={this.handleSubmit}/>
        </form>
        {link}
      </div>
    )
  }
}