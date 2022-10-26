import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let errorMessage;
    if (this.state.password.length === 0) {
      errorMessage = 'A password is required';
    } else if (this.state.password.length < 8) {
      errorMessage = 'Your password is too short';
    } else if (!/[A-Z]/.test(this.state.password)) {
      errorMessage = 'Your password need one capital letter';
    } else if ((!/(?=.*\d)/.test(this.state.password))) {
      errorMessage = 'Your password need one number';
    } else if (!/[!@#$%^&*()]/.test(this.state.password)) {
      errorMessage = 'Your password need one special character';
    } else {
      errorMessage = null;
    }
    if (!errorMessage) {
      return (
        <div>
          <form>
            <label>
              Password:
              <input type='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
              <i className="fa-sharp fa-solid fa-check green"></i>
            </label>
          </form>
        </div>
      );
    }
    return (
      <div>
        <form>
          <label>
            Password:
            <input type='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
            <i className="fa-solid fa-xmark red"></i>
            <p className='red'>{errorMessage}</p>
          </label>
        </form>
      </div>
    );
  }
}
