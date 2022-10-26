import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      length: this.props.poke.length
    };

    this.handleRight = this.handleRight.bind(this);
    this.handleleft = this.handleleft.bind(this);
    this.handleBubble = this.handleBubble.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleRight() {
    clearInterval(this.timer);
    this.setState({ index: (this.state.index + 1) % this.state.length });
    this.timer = setInterval(() => this.handleRight(), 3000);
  }

  handleleft() {
    clearInterval(this.timer);
    this.setState({ index: this.state.index - 1 === -1 ? this.state.length - 1 : this.state.index - 1 });
    this.timer = setInterval(() => this.handleRight(), 3000);
  }

  handleBubble(event) {
    clearInterval(this.timer);
    this.setState({ index: parseInt(event.target.id) });
    this.timer = setInterval(() => this.handleRight(), 3000);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.handleRight(), 3000);
  }

  render() {
    const pokeData = this.props.poke;
    const index = this.state.index;
    return (
      <div className='container center'>
        <div className='row'>
          <div className="column-full center">
            <div onClick={this.handleleft} className="chevrons left-chevron">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="images">
              <div className='images' key={pokeData[index].Id}>
                <img src={pokeData[index].URL} alt={pokeData[index].name}></img>
              </div>
            </div>
            <div onClick={this.handleRight} className="chevrons right-chevron">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column-full center bubbles-container">
            <i id={0} onClick={this.handleBubble} className={this.state.index === 0 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'}></i>
            <i id={1} onClick={this.handleBubble} className={this.state.index === 1 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'}></i>
            <i id={2} onClick={this.handleBubble} className={this.state.index === 2 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'}></i>
            <i id={3} onClick={this.handleBubble} className={this.state.index === 3 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'}></i>
            <i id={4} onClick={this.handleBubble} className={this.state.index === 4 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'}></i>
          </div>
        </div>
      </div>
    );
  }
}
