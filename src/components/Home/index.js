// Write your code here
import './index.css'

import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogged: true}

  onClick = () => {
    this.setState(oldState => ({isLogged: !oldState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Login loginClick={this.onClick} />
          ) : (
            <Logout logoutClick={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
