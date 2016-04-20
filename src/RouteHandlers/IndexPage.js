import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import LoginBox from '../components/LoginBox'
import { setCurrentUser } from '../AC/users'

class IndexPage extends Component {
    static propTypes = {

    };

  static contextTypes = {
    currentUser: PropTypes.object
  }

  static childContextTypes = {
    currentUser: PropTypes.object
  }

  getChildContext()
  {
    //console.log('CURRENT user: ', this.props.user);
    return {
      currentUser: this.props.user
    };
  }

  setCurrentUserAction = (user) => {
    setCurrentUser(user)
  }

  render() {

      const currentUser = this.props.user
      //console.log('CURRENT: ', currentUser);
        return (
            <div>
                <h1>News Application!</h1>
                <LoginBox id = {currentUser.id} setCurrentUserAction = {this.setCurrentUserAction} />
                {this.props.children}
            </div>
        )
    }
}

function getState(stores, props) {

  const user = stores.users.getAll()[0]
  return { user }

}

export default connectToStore(['users'], getState)(IndexPage)