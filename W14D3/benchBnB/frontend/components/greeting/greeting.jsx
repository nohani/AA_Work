import React from 'react';
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
  const buttons = (!this.props.currentUser) ? (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  ) : (
    <div>
      <h2>Welcome { this.props.currentUser.username }</h2>
      <button onClick={this.props.logout}> Log Out </button>
    </div >
  )

    return (
      <div> 
        {buttons}
      </div>
    )
  }
}

export default Greeting;