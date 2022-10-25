import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButtom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return <button onClick = {this.handleClick}> Thanks </button>;
    } else {
      return <button onClick = {this.handleClick} > Click Me! </button>;
    }
  }
}
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <CustomButtom />;

root.render(element);
