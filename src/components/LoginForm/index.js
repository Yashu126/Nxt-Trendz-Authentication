import './index.css'

import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', error: false,errorMsg: ''}

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameFeild = () => {
    const {username} = this.state
    return (
      <>
        <label className="label-el" htmlFor="username">
          USERNAME
        </label>
        <input
          className="input-el"
          type="text"
          value={username}
          id="username"
          placeholder="Username"
          onChange={this.changeUsername}
        />
      </>
    )
  }

  renderPasswordFeild = () => {
    const {password} = this.state
    return (
      <>
        <label className="label-el" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input-el"
          type="password"
          value={password}
          id="password"
          placeholder="Password"
          onChange={this.changePassword}
        />
      </>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({error: true,errorMsg: data.error_msg})
    }
  }

  render() {
    const {error,errorMsg} = this.state
    const errormsg = error && (
      <p className="error-msg">*{errorMsg}</p>
    )

    return (
      <div className="login-form-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form onSubmit={this.onSubmitForm} className="form-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="input-con">{this.renderUsernameFeild()}</div>
          <div className="input-con">{this.renderPasswordFeild()}</div>
          <button className="login-btn" type="submit">
            Login
          </button>
          {errormsg}
        </form>
      </div>
    )
  }
}

export default LoginForm
