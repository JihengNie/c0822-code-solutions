import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      time: 0
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePlay() {
    if (!this.state.play) {
      this.interval = setInterval(() => {
        this.setState(({ time }) => ({ time: time + 1 }));
      }, 1000);
      this.setState({ play: true });
      this.setState({ pause: false });
    }
  }

  handlePause() {
    if (!this.state.pause) {
      this.setState({ play: false });
      this.setState({ pause: true });
      clearInterval(this.interval);
    }
  }

  handleReset() {
    if (this.state.pause) {
      this.setState({ time: 0, play: false, pause: true });
    }
  }

  render() {
    return (
      <div className='container'>
        <button onClick={this.handleReset}> {this.state.time} </button>
        <span>
          {!this.state.play
            ? <i className="fa-solid fa-play fa-3x" onClick={this.handlePlay}></i>
            : <i className="fa-solid fa-pause fa-3x" onClick={this.handlePause}></i>
            }
        </span>
      </div>
    );
  }
}
