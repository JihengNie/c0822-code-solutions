import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      time: 0
    };
    this.handleStarted = this.handleStarted.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleStarted() {
    if (!this.state.isStarted) {
      this.interval = setInterval(() => {
        this.setState(({ time }) => ({ time: time + 1 }));
      }, 1000);
      this.setState({ isStarted: true });
    } else {
      this.setState({ isStarted: false });
      clearInterval(this.interval);
    }
  }

  handleReset() {
    if (!this.state.isStarted) {
      this.setState({ time: 0, isStarted: false });
    }
  }

  render() {
    return (
      <div className='container'>
        <button onClick={this.handleReset}> {this.state.time} </button>
        <span>
          {!this.state.isStarted
            ? <i className="fa-solid fa-play fa-3x" onClick={this.handleStarted}></i>
            : <i className="fa-solid fa-pause fa-3x" onClick={this.handleStarted}></i>
            }
        </span>
      </div>
    );
  }
}
