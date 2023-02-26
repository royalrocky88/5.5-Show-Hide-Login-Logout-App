// Write your code here

import './index.css'

const Login = props => {
  const {loginClick} = props

  return (
    <button type="button" className="btn" onClick={loginClick}>
      Login
    </button>
  )
}

export default Login
