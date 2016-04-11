import React, { Component, PropTypes } from 'react'

class Loader extends Component {
  static propTypes: {
      //text: PropTypes.string.isRequired
    }

  render ()
  {
    return (
      <div>{this.props.text || 'Please wait..'}</div>
    )
  }
}

export default Loader