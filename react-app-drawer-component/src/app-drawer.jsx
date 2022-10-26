import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <i className="fa-solid fa-bars" onClick={this.handleMenuClick}></i>
      );
    }
    return (
      <div className="container" onClick={this.handleMenuClick}>
        <div className="column">
            <div>
              <h1 onClick={this.handleMenuClick} >Menu</h1>
              <h5 onClick={this.handleMenuClick} >About</h5>
              <h5 onClick={this.handleMenuClick}> Get Started</h5>
              <h5 onClick={this.handleMenuClick}> Sign In</h5>
            </div>
          </div>
        </div>
    );
  }
}
