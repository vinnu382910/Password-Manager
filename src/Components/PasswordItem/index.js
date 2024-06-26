import './index.css'

const PasswordItem = props => {
  const {userDetails, showPass, deleteItem} = props
  const {id, website, username, password} = userDetails
  const pass = showPass ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="delete-logo"
    />
  )
  const onClickDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="userInfo-cont">
      <div className="logo-cont">
        <p>{username[0]}</p>
      </div>
      <div className="user-cont">
        <p>{website}</p>
        <p>{username}</p>
        {pass}
      </div>
      <button
        className="delete-button"
        onClick={onClickDelete}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default PasswordItem
