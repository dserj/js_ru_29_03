import React, { Component, PropTypes } from 'react'

class LoginBox extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    setCurrentUserAction: PropTypes.func.isRequired
  };

  static contextTypes = {
    currentUser: PropTypes.object
  }

  getLoggedInHtml = () =>
  {
    return <div>
      Hello, {this.context.currentUser.name}
    </div>
  }

  getLoggedOutHtml = () =>
  {
    return <form onSubmit={this.setCurrentUser}>
      <label>login: </label>
      <input type='text' ref = 'login' /> <button onClick={this.onLoginClick}>Login</button>
    </form>
  }

  onLoginClick = (ev) => {
    ev.preventDefault()
    const userName = this.refs.login.value
    //console.log('setCurrentUser', userName)
    this.props.setCurrentUserAction(userName)
  }

  render() {

    const view = (this.context.currentUser && this.context.currentUser.id) ? this.getLoggedInHtml() : this.getLoggedOutHtml()

    return <div>
      {view}
    </div>
  }
}



export default LoginBox