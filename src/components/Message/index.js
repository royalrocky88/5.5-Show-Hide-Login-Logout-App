// Write your code here
import './index.css'

const Message = props => {
  const {isLogged} = props
  return (
    <h1 className="text-message">
      {isLogged ? 'Please Login' : 'Welcome User'}
    </h1>
  )
}

export default Message
