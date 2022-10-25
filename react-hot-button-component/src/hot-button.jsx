import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
  }

  render() {
    const i = this.state.clicks;
    if (i >= 18) {
      return <button className="eighteen-click" onClick={this.handleClick}> Hot Button </button>;
    } else if (i >= 15) {
      return <button className="fifteen-click" onClick={this.handleClick}> Hot Button </button>;
    } else if (i >= 12) {
      return <button className="twelve-click" onClick={this.handleClick}> Hot Button </button>;
    } else if (i >= 9) {
      return <button className="nine-click" onClick={this.handleClick}> Hot Button </button>;
    } else if (i >= 6) {
      return <button className="six-click" onClick={this.handleClick}> Hot Button </button>;
    } else if (i >= 3) {
      return <button className="three-click" onClick={this.handleClick}> Hot Button </button>;
    } else {
      return <button className="zero-click" onClick={this.handleClick}> Hot Button </button>;
    }
  }
}
