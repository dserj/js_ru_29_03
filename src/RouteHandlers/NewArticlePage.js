import React, { Component, PropTypes } from 'react'
import history from '../history'

class NewArticlePage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        currentUser: PropTypes.object
    }

    componentDidMount()
    {
        console.log('componentDidMount')

        if (!this.context.currentUser.id)
        {
            history.replace('/403/')
        }
    }

    render() {
        return (
            <div>
               <h3>New article page</h3>
                <p>
                    Current user name: {this.context.currentUser.name}
                </p>
            </div>
        )
    }
}

export default NewArticlePage