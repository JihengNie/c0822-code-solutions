import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ toggled }) => ({ toggled: !toggled }));
  }

  render() {
    const status = this.state.toggled;
    if (status) {
      return (
        <div className="container">
          <button className="on"></button>
          <button onClick={this.handleClick}></button>
          <h3>ON</h3>
        </div>
      );
    } else {
      return (
        <div className="container">
          <button onClick={this.handleClick}></button>
          <button className="off"></button>
          <h3>OFF</h3>
        </div>
      );
    }
  }
}
