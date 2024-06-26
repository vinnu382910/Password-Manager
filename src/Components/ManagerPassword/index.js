import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

const userDetails = []

class ManagerPassword extends Component {
  state = {
    userList: userDetails,
    website: '',
    username: '',
    password: '',
    showPass: false,
    searchInput: '',
  }

  onAddWeb = event => {
    this.setState({website: event.target.value})
  }

  onAddUserName = event => {
    this.setState({username: event.target.value})
  }

  onAddPass = event => {
    this.setState({password: event.target.value})
  }

  showPass = () => {
    this.setState(prevState => ({showPass: !prevState.showPass}))
  }

  onSearchUser = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {userList} = this.state
    const filteredItem = userList.filter(eachItem => eachItem.id !== id)
    this.setState({
      userList: filteredItem,
    })
  }

  onAddUserDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newUser = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
    }))
  }

  render() {
    const {userList, showPass, searchInput} = this.state
    const finalUserList = userList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const finalCount = finalUserList.length
    console.log(finalCount)
    return (
      <div className="bg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
          className="password-logo"
        />
        <div className="Passwdmanager-cont">
          <div className="addPass-cont">
            <h1 className="addPass-heading">Add New Password</h1>
            <form className="addPass-cont2" onSubmit={this.onAddUserDetails}>
              <div className="input">
                <label htmlFor="website">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="logo"
                  />
                </label>

                <input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="Enter Website"
                  className="website"
                  onChange={this.onAddWeb}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="username">
                  {' '}
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="logo"
                  />
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  className="website"
                  onChange={this.onAddUserName}
                />
              </div>
              <div className="input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  className="website"
                  onChange={this.onAddPass}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-img"
          />
        </div>
        <div className="Passwdmanager-cont3">
          <div className="Passwdmanager-cont2">
            <h1 className="addPass-heading">Your Passwords</h1>
            <p className="addPass-heading">{finalCount}</p>
            <div className="input">
              <label htmlFor="searchInput">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="logo"
                />
              </label>
              <input
                type="search"
                id="searchInput"
                name="searchInput"
                placeholder="Search"
                className="website"
                value={searchInput}
                onChange={this.onSearchUser}
              />
            </div>
          </div>
          <hr className="styled-hr" />
          <div className="checkBox">
            <input
              type="checkbox"
              id="scales"
              name="scales"
              className="checkbox"
              onChange={this.showPass}
            />
            <label htmlFor="scales" className="pass">
              Show Passwords
            </label>
          </div>
          {finalCount === 0 ? (
            <div className="noPass-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="noPass"
              />
              <p className="pass">No Passwords</p>
            </div>
          ) : (
            <ul className="user-list">
              {finalUserList.map(eachItem => (
                <PasswordItem
                  userDetails={eachItem}
                  showPass={showPass}
                  deleteItem={this.deleteItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default ManagerPassword
