// Write your code here

import './index.css'

const Logout = props => {
  const {logoutClick} = props
  return (
    <button type="button" className="btn" onClick={logoutClick}>
      Logout
    </button>
  )
}
export default Logout
